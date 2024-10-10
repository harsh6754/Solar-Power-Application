const Admin = require('../models/admin');
const errorHandler = require('../utils/ErrorsHandling');
const bcryptjs = require('bcryptjs');
const exportTOXLSX = require('../excel/exportToXLSX');
const fs = require('fs');
const updateModel = require('../Updation/dailyupdates');

// Get all admins
export const getAllAdmin = async (req, res, next) => {
    try {
        const admins = await Admin.find({});
        if (!admins || admins.length === 0) {
            return next(errorHandler(4004, "Admin not found"));
        }
        res.status(200).json(admins);
    } catch (error) {
        next(error);
    }
};

// Get a single admin by ID
export const getAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return next(errorHandler(404, 'Admin Not Found'));
        }
        const { password: pass, ...rest } = admin._doc; // Exclude password from response
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

// Update admin details
export const updateAdmin = async (req, res, next) => {
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            { $set: { ...req.body } },
            { new: true }
        );

        if (!updatedAdmin) {
            return next(errorHandler(404, 'Admin Not Found'));
        }

        const { password, ...rest } = updatedAdmin._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

// Delete an admin by ID
export const deleteAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return next(errorHandler(404, "Admin not found"));
        }
        res.status(200).json('Admin has been deleted successfully');
    } catch (error) {
        next(error);
    }
};

// Export data to Excel
export const exportToExcel = async (req, res, next) => {
    try {
        await exportTOXLSX();
        const filePath = "C:\\Users\\agarw\\OneDrive\\Desktop\\Harsh Project\\solar-power\\server\\output.xlsx";
        const fileStream = fs.createReadStream(filePath);

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");

        fileStream.pipe(res);
    } catch (error) {
        console.error("Error exporting Excel file:", error);
        res.status(500).json({ error: "Failed to export Excel file" });
    }
};

// Create a daily post
export const createDailyPost = async (req, res, next) => {
    const { date, powergeneration, userRef } = req.body;
    try {
        const newDailyPost = await updateModel.create({
            date,
            powergeneration,
            userRef,
        });
        res.status(201).json(newDailyPost);
    } catch (err) {
        next(err);
    }
};

// Get a daily post by userRef
export const getDailyPost = async (req, res, next) => {
    const { id } = req.params;
    try {
        const dailyPosts = await updateModel.find({ userRef: id });
        res.status(200).json(dailyPosts);
    } catch (err) {
        next(err);
    }
};

// Get all daily posts
export const getallDailyPost = async (req, res, next) => {
    try {
        const dailyPosts = await updateModel.find();
        res.status(200).json(dailyPosts);
    } catch (err) {
        next(err);
    }
};
