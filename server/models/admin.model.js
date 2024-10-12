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

// Define the admin schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (password) {
                return isStrongPassword(password);
            },
            message: props => `Password should be at least 8 characters long, contain uppercase, lowercase, numbers, and special characters!`,
        },
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
},
{ timestamps: true });

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

// Export the Admin model
export default Admin;
