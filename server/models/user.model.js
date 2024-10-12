//User Models

import mongoose from 'mongoose';

// Function to check if a password is strong
const isStrongPassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
};


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
        validate: {
            validator: function (password) {
                return isStrongPassword(password);
            },
            message: props => `Password should be at least 8 characters long, contain uppercase, lowercase, numbers, and special characters!`,
        },
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
