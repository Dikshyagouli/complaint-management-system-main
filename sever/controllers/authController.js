import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Complaint from '../models/Complaint.js';

export const register = async (req, res) => {
  try {
    const data = req.body;
    // FIX: Corrected typo from `data.emal` to `data.email`
    const existing = await User.findOne({ email: data.email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hashed = await bcrypt.hash(data.password, 10);

    // FIX: Creating a new user instance with the hashed password
    const user = new User({ ...data, password: hashed });
    const response = await user.save();

    console.log(response, "User registered successfully");
    const token = jwt.sign({ id: response._id, role: response.role }, process.env.JWT_SECRET);
    return res.status(201).json({
      token,
      user: { id: response._id, name: response.name, role: response.role },
      msg: "User registered successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // --- NEW LOGIC ADDED HERE ---
    let message = "Login successful";
    
    // Find any public complaints with this user's email
    const publicComplaints = await Complaint.find({ email: user.email, user: { $exists: false } });

    if (publicComplaints.length > 0) {
      // If public complaints are found, update them with the user's ID
      await Complaint.updateMany(
        { email: user.email, user: { $exists: false } },
        { $set: { user: user._id } }
      );
      message += ". Your previous public complaints have been linked to your account.";
    }
    // --- END OF NEW LOGIC ---

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
   return  res.json({ token, user: { id: user._id, name: user.name, role: user.role }, msg: message });
  } catch (err) {
   return res.status(500).json({ error: err.message });
  }
};

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
