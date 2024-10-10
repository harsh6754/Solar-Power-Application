import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import Admin from '../models/admin.js';
import User from '../models/user.js';
import ErrorsHandling from "../utils/ErrorsHandling.js";

export const createAdmin = async (req, res, next) => {
    try {
        const { username, mobile, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const newAdmin = new Admin({
            username,
            mobile,
            email,
            password: hashedPassword,
        });
        await newAdmin.save();

        res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
    } catch (error) {
        next(error);
    }
};

export const signinAdmin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validAdmin = await Admin.findOne({ email });
        if (!validAdmin) return next(ErrorsHandling(404, "Admin not found"));

        const validPassword = await bcryptjs.compare(password, validAdmin.password);
        if (!validPassword) {
            return next(ErrorsHandling(401, "Invalid credentials"));
        }

        const token = jwt.sign({ id: validAdmin._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validAdmin._doc;
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
};

export const signoutAdmin = async (req, res, next) => {
    try {
        res.clearCookie("access_token");
        res.status(200).json("Admin has been logged out");
    } catch (error) {
        next(error);
    }
};

export const createUserByAdmin = async (req, res, next) => {
    try {
        const { username, mobile, email, password, address, plantname } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
            username,
            mobile,
            email,
            password: hashedPassword,
            plantname,
            address,
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        next(error);
    }
};

export const signinUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(ErrorsHandling(404, "User not found"));

        const validPassword = await bcryptjs.compare(password, validUser.password);
        if (!validPassword) return next(ErrorsHandling(401, "Invalid credentials"));

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
};

export const signoutUser = async (req, res, next) => {
    try {
        res.clearCookie("access_token");
        res.status(200).json("User has been logged out");
    } catch (error) {
        next(error);
    }
};
