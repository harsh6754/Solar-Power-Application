//User Models

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"],
    },
    mobile: {
        type: String, // Changed to String to handle country codes and longer numbers
        required: [true, "Mobile number is required"],
        unique: true,
        match: [/^\+?\d{10,15}$/, "Please provide a valid mobile number"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please provide a valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
    },
    plantname: {
        type: String,
        required: [true, "Plant name is required"],
        trim: true,
    },
    address: {
        type: String,
        default: "Not provided",
    },
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
