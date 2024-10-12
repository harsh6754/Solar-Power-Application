//Export Excel Sheet to Json Formate and Store in MongoDb

import mongoose from 'mongoose';
import xlsx from 'xlsx';
import connectDB from '../DB/db.js';

// Define the Listing Data Schema
const ListingDataSchema = new mongoose.Schema(
  {
    plantCapacity: { 
        type: Number, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    siteLocation: { 
        type: String, 
        required: true 
    },
    siteAddress: { 
        type: String, 
        required: true 
    },
    siteContactNumber: { 
        type: String, 
        required: true 
    },
    msedclConsumerNumber: { 
        type: String, 
        required: true 
    },
    assignedPlan: { 
        type: String, 
        enum: [
            "Basic", 
            "PVProtect", 
            "ProPVProtect"
        ], 
        required: true 
    },
    plantCOD: { 
        type: String, 
        required: true 
    },
    msedclRegisteredMobileNumber: { 
        type: String, 
        required: true 
    },
    numberOfModules: { 
        type: Number, 
        required: true 
    },
    moduleMake: { 
        type: String, 
        required: true 
    },
    moduleType: { 
        type: String, 
        required: true 
    },
    numberOfStrings: { 
        type: Number, 
        required: true 
    },
    inverterMake: { 
        type: String, 
        required: true 
    },
    inverterModelName: { 
        type: String, 
        required: true 
    },
    inverterSerialNumber: { 
        type: String, 
        required: true 
    },
    inverterCapacity: { 
        type: Number, 
        required: true 
    },
    modeOfInternetConnection: { 
        type: String, 
        required: true 
    },
    sld: { 
        type: String, 
        required: true 
    },
    plantLayout: { 
        type: String, 
        required: true 
    },
    netMeteringFile: { 
        type: String, 
        required: true 
    },
    moduleDatasheet: { 
        type: String, 
        required: true 
    },
    inverterDatasheet: { 
        type: String,
        required: true 
    },
    userRef: { 
        type: String, 
        required: true 
    },
  },
  { timestamps: true }
);

// Model Initialization
const ListingData = mongoose.models.ListingData || mongoose.model('ListingData', ListingDataSchema);

// Export to XLSX function
const exportToXLSX = async () => {
  try {
    // Connect to the database
    await connectDB();
    
    // Fetch data from the database
    const data = await ListingData.find({}).lean();

    if (data.length === 0) {
      console.log("No data available for export.");
      return;
    }

    // Convert the data to a worksheet
    const ws = xlsx.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "ListingData");

    // Output path for the Excel file
    const outputPath = "./output.xlsx";

    // Write the workbook to the file
    xlsx.writeFile(wb, outputPath);

    console.log(`Data successfully exported to ${outputPath}`);
  } catch (error) {
    console.error("Error exporting data to XLSX:", error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
  }
};

// Export the function for use
export default exportToXLSX; // Corrected the typo here
