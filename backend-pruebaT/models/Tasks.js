const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
  tarea: String,
  period: String,
  time: Number
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Task', taskSchema);