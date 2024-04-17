const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
    trackingNumber: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['В пути', 'Получено', 'Доставлено'],
        default: 'В пути'
    }
});

module.exports = mongoose.model('Parcel', parcelSchema);
