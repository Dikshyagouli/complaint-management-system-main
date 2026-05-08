// const Complaint = require('../models/Complaint');
import Complaint from '../models/Complaint.js';
import User from '../models/User.js';

export const createPublicComplaint = async (req, res) => {
  try {
    const { name, email, title, description } = req.body;
    console.log("object");

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, role: 'public' });
    }

    const complaint = new Complaint({ 
      title, 
      description, 
      user: user._id 
    });
    
    await complaint.save(); 

   return res.status(201).json(complaint);
  } catch (err) {
   return res.status(500).json({ error: err.message });
  }
};

// Existing protected function
export const createComplaint = async (req, res) => {
  const data = req.body;
  try {
    // FIX: Use .save() on the instance, not the model

    const complaints = {...data, user: req.user.id};
    console.log(complaints);

    await Complaint.create(complaints)
    
    return res.status(201).json({message: "Submitted."});
  } catch (err) {
   return res.status(500).json({ error: err.message });
  }
};

export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user.id }).populate('user');
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const  getAllComplaints = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: "Access denied" });
  try {
    const complaints = await Complaint.find().populate('user');
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateComplaintStatus = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: "Access denied" });
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedComplaint = await Complaint.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedComplaint) return res.status(404).json({ msg: "Complaint not found" });
    res.json(updatedComplaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
