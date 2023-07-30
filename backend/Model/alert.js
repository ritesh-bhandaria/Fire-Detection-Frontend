const mongoose = require("mongoose")

const alertSchema  = new mongoose.Schema({
    alertName:{type:String,require:true},
    creator:{type:String,require:true},
    latitutde:{type:Number, require:true},
    longitude:{type:Number, require:true},
    eventDate:{type:Date},
    frequency:{type:Number}
})

export default alertSchema;