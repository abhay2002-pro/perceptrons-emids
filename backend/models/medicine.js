const mongoose = require('mongoose');
const MedicineSchema = new mongoose.Schema({
    RxNORM:{
        type: String,
        required: true,
    },
    Genric:{
        type: String,
        required: true,
    },
    FullName:{
        type: String,
        required: true,
    },
    BrandName:{
        type: String,
        required: true,
    },
    route:{
        type: String,
        required: true,
    },
    dosage:{
        type: String,
        required: true,
    },
})

const User = mongoose.model('Medicine',MedicineSchema);
module.exports = User;