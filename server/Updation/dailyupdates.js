// dailyupdates.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const DailyUpdateSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    powergeneration: {
        type: Number,
        required: true,
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { timestamps: true });

const DailyUpdateModel = mongoose.model("DailyUpdate", DailyUpdateSchema);

export default DailyUpdateModel; // Default export
