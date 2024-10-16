//Listing Models

import mongoose from 'mongoose';


const ListingDataSchema = new mongoose.Schema({
    plantCapacity: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    siteLocation: {
        type: String,
        required: true,
    },
    siteAddress: {
        type: String,
        required: true,
    },
    siteContactNumber: {

    },
    msedclConsumerNumber: {
        type: String,
        required: true,
    },
    assignedPlan: {
        type: String,
        enum: [
            "Basic",
            "PVProtect",
            "ProPVProtect"
        ],
        required: true,
    },
    plantCOD: {
        type: String,
        required: true,
    },
    msedclRegisterdMobileNumber: {
        type: String,
        required: true,
    },
    numberOfModules: {
        type: Number,
        required: true,
    },
    moduleMake: {
        type: String,
        required: true,
    },
    moduleType: {
        type: String,
        required: true,
    },
    numberOfStrings: {
        type: Number,
        required: true,
    },
    inverterMake: {
        type: String,
        required: true,
    },
    inverterModelName: {
        type: String,
        required: true,
    },
    inverterSerialNumber: {
        type: String,
        required: true,
    },
    inverterCapacity: {
        type: Number,
        required: true,
    },
    modeOfInternetConnection: {
        type: String,
        required: true,
    },
    sld: {
        type: String,
        required: true,
    },
    plantLayout: {
        type: String,
        required: true,
    },
    netMeteringFile: {
        type: String,
        required: true,
    },
    moduleDatasheet: {
        type: String,
        required: true,
    },
    inverterDatasheet: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
)

const listingData = mongoose.model.listingData || mongoose.model('listingData',ListingDataSchema);
export default listingData;