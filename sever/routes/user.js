// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/auth');
// const { getUserProfile } = require('../controllers/userController');
import { getProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';
import express from 'express';
const router = express.Router();

router.get('/profile', auth, getProfile);

export default router;
