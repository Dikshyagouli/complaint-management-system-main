// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true
  },

  email:{
    type: String,
    trim : true,
    required: false
  },
  user:{
    type: Object,
  },
  title:{
    type: String,
    required: true,
    trim:true
  },
  description:{
    type: String,
    required: true,
    trim:true
  },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', trim: true }, // <-- FIX: required
  status: { type: String, default: 'Pending', enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'] },
},{
  timeseries: true,
}
);

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;
