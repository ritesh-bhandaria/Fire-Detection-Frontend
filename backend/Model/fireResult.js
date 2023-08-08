// import { Schema, model } from "mongoose";
const mongoose = require('mongoose')


const fireResultSchema = new mongoose.Schema({
  alertId: { type: String, required: true },
  result: { type: Object }
}, {
  timestamps: true
});

const FireResult = mongoose.model('FireResult', fireResultSchema); // Use "model" from the imported package
module.exports = FireResult
