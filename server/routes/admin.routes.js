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

const router = express.Router();

// Routes for Admin Operations
router.get('/admins', getAllAdmin); // Get all admins
router.get('/admins/:id', getAdmin); // Get a single admin by ID
router.put('/admins/:id', updateAdmin); // Update admin by ID
router.delete('/admins/:id', deleteAdmin); // Delete admin by ID

// Route for Exporting Data to Excel
router.get('/admins/exportExcel', exportToExcel);

// Routes for Daily Updates
router.post('/daily-updates', createDailyPost); // Create a daily update
router.get('/daily-updates/:id', getDailyPost); // Get daily update by userRef
router.get('/daily-updates', getallDailyPost); // Get all daily updates

// Export the router
export default router; // Use export default with ES modules
