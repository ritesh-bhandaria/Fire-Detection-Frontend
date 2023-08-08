const router = require('express').Router();
const FireResult = require('../Model/fireResult');
// import axios from 'axios';
const axios = require('axios')

router.post('/create', async (req, res) => {
    const {top_long, top_lat, bot_long, bot_lat, date} = req.body
    // const ans = await getFireResult({top_long, top_lat, bot_long, bot_lat, date})
    // const ans = {'43-52':1}
    // console.log(ans);

    // res.status(200).json("answer");
    const alertResult = new FireResult({
        alertId:req.body.alertId,   
        result: await getFireResult({top_long, top_lat, bot_long, bot_lat, date})
    })
    try {
        const result = await alertResult.save();
        console.log(result)
        res.status(200).json("answer aa gaya")
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const fireResult = await FireResult.findOne({ alertId: id }); // Use findOne to retrieve a single document based on the provided id
        let lat_top = 0;
        let long_top = 0;
        let num1 = 0;
        let num2 = 0
        if (fireResult) {
            // console.log(fireResult.createdAt)
            Object.keys(fireResult.result).forEach(key => {
                const value = fireResult.result[key];
                const data = key.split('-')
                num1 = parseInt(data[0])
                num2 = parseInt(data[1]);
                lat_top = 90 - (((num1 + 1) * 288) / Math.pow(2, 8));
                long_top = ((num2 + 1) * 288) / Math.pow(2, 8) - 180;

                console.log(lat_top, long_top)
                
            });
            const date = fireResult.createdAt;
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;
            res.status(200).json({lat_top:lat_top, long_top:long_top, x_axis:num1, y_axis:num2, date:formattedDate});
        } else {
            res.status(404).json({ message: 'Fire result not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
});


const getFireResult = async({top_long, top_lat, bot_long, bot_lat, date})=>{
    try{

        const result = await axios.post('http://192.168.107.65:6000/predict', {top_long, top_lat, bot_long, bot_lat, date})
        return result.data
    }catch(err)
    {
        console.log(err);
    }
    return []
}

module.exports = router;
