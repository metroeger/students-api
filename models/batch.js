// models/batch.js
const mongoose = require('../config/database')
const { Schema } = mongoose


const studentSchema = new Schema({
  name: { type: String, required: true }, // in minutes
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  green: { type: Boolean, default: false },
  yellow: { type: Boolean, default: false },
  red: { type: Boolean, default: false },
  //color: {type: String, default: ""}
  //ratedBy: [{ type: Schema.Types.ObjectId, ref: 'users' }],

})

const batchSchema = new Schema({
  batchName: { type: String, required: true },
  students: [studentSchema],
  teacherId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  startsAt: {type: Date, default: null},
  endsAt: {type: Date, default: null}
})

module.exports = mongoose.model('batches', batchSchema)
