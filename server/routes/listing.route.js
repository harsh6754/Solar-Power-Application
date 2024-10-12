//Listing Routes

import express from 'express';
import {
    createList,
    deleteListing,
    getAllListings,
    getOneList,
    updateListing
} from '../controllers/listining.controller.js';

const router = express.Router();

router.post("/createlist", createList);
router.get("/getalllistings", getAllListings);
router.get("/getonelist/:email", getOneList);
router.get("/update/:id", updateListing);
router.delete("/delete/:id", deleteListing);
export default router;

