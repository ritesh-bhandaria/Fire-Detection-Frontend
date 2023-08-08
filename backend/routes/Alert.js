const router = require('express').Router()
const Alert = require('../Model/alert')

require('dotenv').config()

router.get('/home', (req, res)=>{
    res.status(200).send("received");
})
// create new alert
// create data
router.post('/create', async (req, res)=>{
    const alertName = req.body.alertName
    const creatorId = req.body.creator
    const lat_top = req.body.latitude_top
    const long_top = req.body.longitude_top
    const lat_bot = req.body.latitude_bot
    const long_bot = req.body.longitude_bot
    const freq = req.body.frequency
    const alertData = new Alert({
        alertName:alertName,
        creator:creatorId,
        latitude_top:lat_top,
        longitude_top:long_top,
        latitude_bot:lat_bot,
        longitude_bot:long_bot,
        frequency:freq
    })
    try{
        const data = await alertData.save()
        console.log(data)
        res.status(200).json(data._id);
        

    }catch(err)
    {
        res.status(400).json(err)
    }
})


// read the alert data in a list for a particular creator and send the list
// get data
router.get('/:creatorId', async(req, res)=>{
    const creator = req.params.creatorId
    try{
        const alertList = await Alert.find({creator:creator});
        if(alertList.length>0)
        {
            res.status(200).json(alertList);
        }
        else{
            res.status(200).json([])
        }
    }catch(err)
    {
        res.status(400).json(err)
    }
})

router.get('/id/:alertId', async(req, res)=>{
    // const creator = req.params.creatorId
    const alertId = req.params.alertId
    try{
        const alertList = await Alert.findById(alertId);
        if(alertList)
        {
            res.status(200).json(alertList);
        }
        else{
            res.status(200).json("No alert present")
        }
    }catch(err)
    {
        res.status(400).json(err)
    }
})


// delete the alert
// delete data
router.delete('/:alertId', async (req, res)=>{
    const alertId = req.params.alertId;
    try{
        await Alert.findByIdAndDelete(alertId)
        res.status(200).json("delete successfully")
    } catch(err)
    {
        res.status(400).json(err);
    }
})


// update alert
//update data
router.put('/:alertId', async (req, res)=>{
    const updatedData= req.body
    const alertId = req.params.alertId;
    const myQuery = {_id:alertId};
    const newValues = {$set:updatedData}
    console.log(updatedData);
    try{
        // const alert = await Alert.findById(alertId);
        await Alert.updateOne(myQuery,newValues)
        res.status(200).json('udpated');
    }catch(err)
    {
        res.status(400).json(err)
    }
})


module.exports = router;