import express from 'express';
import auth from '../middleware/auth.js';
import { createComplaint,  getAllComplaints,  getComplaints,  updateComplaintStatus , createPublicComplaint} from '../controllers/complaintController.js';
const router = express.Router();

// Public route for unauthenticated users
router.post('/public', createPublicComplaint);

router.post('/', auth, createComplaint);
router.get('/user', auth, getComplaints);
router.get('/all', auth, getAllComplaints); // admin only
router.put('/:id/status', auth, updateComplaintStatus); // admin only

export default router;