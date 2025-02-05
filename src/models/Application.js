import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({

    company: {
        type: String,
        required: true
    },
    notes:{
        type:String,
        required:true
    },
    position: {
        type: String,
        required: true
    },
    dateApplied: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: "applied"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
