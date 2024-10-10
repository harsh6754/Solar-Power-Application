import mongoose from 'mongoose';

// Correctly define the admin schema using mongoose.Schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String, // Corrected 'tyep' to 'type'
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
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // Use 'default' for a fallback value
    },
}, 
{ timestamps: true });

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

// Export the Admin model
export default Admin;
