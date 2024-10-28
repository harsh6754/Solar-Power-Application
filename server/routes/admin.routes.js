//Admin Routes

import {
    deleteAdmin,
    getAdmin,
    getAllAdmin,
    updateAdmin,
    exportToExcel,
    createDailyPost,
    getDailyPost,
    getallDailyPost
} from '../controllers/admin.controller.js'; // Use .js extension with ES modules

import express from 'express';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Configure rate limiter: maximum of 100 requests per 15 minutes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

// Routes for Admin Operations
router.get('/admins', limiter, getAllAdmin); // Get all admins
router.get('/admins/:id', limiter, getAdmin); // Get a single admin by ID
router.put('/admins/:id', limiter, updateAdmin); // Update admin by ID
router.delete('/admins/:id', limiter, deleteAdmin); // Delete admin by ID

// Route for Exporting Data to Excel
router.get('/admins/exportExcel', exportToExcel);

// Routes for Daily Updates
router.post('/daily-updates', createDailyPost); // Create a daily update
router.get('/daily-updates/:id', getDailyPost); // Get daily update by userRef
router.get('/daily-updates', getallDailyPost); // Get all daily updates

// Export the router
export default router; // Use export default with ES modules
