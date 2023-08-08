const mongoose = require("mongoose")

const alertSchema  = new mongoose.Schema({
    alertName:{type:String,require:true},
    creator:{type:String,require:true},
    latitude_top:{type:Number, require:true},
    longitude_top:{type:Number, require:true},
    latitude_bot:{type:Number, require:true},
    longitude_bot:{type:Number, require:true},
    frequency:{type:String, require:true},
    status:{type:String},
    nextDate:{type:Date, default:new Date()}
}, {
    timestamps:true,
})

const Alert = mongoose.model('Alert', alertSchema)
module.exports = Alert