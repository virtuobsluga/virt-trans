import mongoose, { Schema } from 'mongoose';

const TranslationSchema = new Schema({
    path: String,
    assignee: String,
    created_by: String,
    modified_by: String,
    approved_dt: Boolean,
    approved_kj: Boolean,
    approved_kp: Boolean,
    approved_ur: Boolean,
    payment: Boolean,
},
    {
        timestamps: true,
    });

const Translation = mongoose.models.Translation || mongoose.model('Translation', TranslationSchema);
export default Translation;