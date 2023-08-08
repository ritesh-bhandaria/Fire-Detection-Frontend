const router = require('express').Router()
const axios = require('axios');
const Alert = require('../Model/alert');
const FireResult = require('../Model/fireResult')
const { getFireResult } = require('../verifyToken');

const {sendEmail} = require('./mail')
// const axios = require('axios')

require('dotenv').config()

router.get('/getAll', async (req, res) => {
    await checkForAlert(new Date().getDate());
    res.status(200).send("No data");

})

const getDateFormat = (date) => {
    return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}
const checkForAlert = async (time) => {
    let arr = [];
    try {
        const data = await Alert.find();
        const todayDate = getDateFormat(new Date())
        let newNextDate;
        if (data) {
            data.forEach((item) => {
                console.log(item)
                if (getDateFormat(item.nextDate) === todayDate) {
                    const { longitude_bot, longitude_top, latitude_top, latitude_bot } = item;
                    const id = item._id.toString();
                    arr.push({ longitude_bot, longitude_top, latitude_top, latitude_bot, id });
                    // var newNextDate
                    if (item.frequency === 'd') {
                        newNextDate = new Date(item.nextDate.getTime() + 24 * 60 * 60 * 1000);
                    } else if (item.frequency === 'd') {
                        newNextDate = new Date(item.nextDate.getTime() + 7 * 24 * 60 * 60 * 1000);
                    } else {
                        const now = item.nextDate
                        newNextDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
                    }
                    item.nextDate = newNextDate;
                    console.log("Mydata ", item);
                    console.log(arr);
                }
            })
        }
        if (arr.length > 0) {
            try {
                await Alert.updateMany(
                    { _id: { $in: arr.map(item => item.id) } },
                    { $set: { nextDate: newNextDate } }
                );

                console.log("Items updated in the database.");
            } catch (error) {
                console.error("Error updating items in the database:", error);
            }
        }

        if (arr.length) {
            const requestCalls = arr.map((item) => getFireResult(
                {
                    top_long: item.longitude_top,
                    top_lat: item.latitude_top,
                    bot_long: item.longitude_bot,
                    bot_lat: item.latitude_bot,
                    date: item.date
                }
            ))

            const myData = await Promise.all(requestCalls)
            // const myData = await Promise.all(requestCalls);

            if (myData) {
                myData.map(async (item, id) => {
                    // Assuming you have an appropriate Mongoose schema and model for FireAlert
                    try {
                        // const fireAlert = await fireAlert.findById(id);
                        const result = new FireResult({
                            alertId:id,
                            result:item
                        })
                        await result.save();
                    } catch (error) {
                        console.error(`Error updating FireAlert with ID ${item.id}:`, error);
                    }
                });
            }


        }
    } catch (error) {

    }
}

router.get('/home', (req, res) => {
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
        alertName: alertName,
        creator: creatorId,
        latitude_top: lat_top,
        longitude_top: long_top,
        latitude_bot: lat_bot,
        longitude_bot: long_bot,
        frequency: freq
    })
    try {

        const data = await alertData.save()
        console.log(data)
        const fireResult = await getFireResult({top_long:long_top, top_lat:lat_top, bot_long:long_bot,  bot_lat:lat_bot, date: new Date()})
        console.log(fireResult);
        
        res.status(200).json(data._id);


    } 
    catch (err) {
        res.status(400).json(err)
    }
})


// read the alert data in a list for a particular creator and send the list
// get data
router.get('/:creatorId', async (req, res) => {
    const creator = req.params.creatorId
    try {
        const alertList = await Alert.find({ creator: creator });
        if (alertList.length > 0) {
            res.status(200).json(alertList);
        }
        else {
            res.status(200).json([])
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/id/:alertId', async (req, res) => {
    // const creator = req.params.creatorId
    const alertId = req.params.alertId
    try {
        const alertList = await Alert.findById(alertId);
        if (alertList) {
            res.status(200).json(alertList);
        }
        else {
            res.status(200).json("No alert present")
        }
    } catch (err) {
        res.status(400).json(err)
    }
})


// delete the alert
// delete data
router.delete('/:alertId', async (req, res) => {
    const alertId = req.params.alertId;
    try {
        await Alert.findByIdAndDelete(alertId)
        res.status(200).json("delete successfully")
    } catch (err) {
        res.status(400).json(err);
    }
})


// update alert
//update data
router.put('/:alertId', async (req, res) => {
    const updatedData = req.body
    const alertId = req.params.alertId;
    const myQuery = { _id: alertId };
    const newValues = { $set: updatedData }
    console.log(updatedData);
    try {
        // const alert = await Alert.findById(alertId);
        await Alert.updateOne(myQuery, newValues)
        res.status(200).json('udpated');
    } catch (err) {
        res.status(400).json(err)
    }
})




module.exports = router;