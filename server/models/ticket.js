import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open', // default status if not provided
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low', // default priority if not provided
    },
    createdBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // correct default date assignment
    },
});

const Tickets = mongoose.model('Ticket', ticketSchema);

export default Tickets;
