const mongoose = require("mongoose")

const alertSchema  = new mongoose.Schema({
    alertName:{type:String,require:true},
    creator:{type:String,require:true},
    latitude:{type:Number, require:true},
    longitude:{type:Number, require:true},
    frequency:{type:Number}
}, {
    timestamps:true,
})

const Alert = mongoose.model('Alert', alertSchema)
module.exports = Alert