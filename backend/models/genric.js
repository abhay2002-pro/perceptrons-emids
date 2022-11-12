const mongoose = require('mongoose');
const MedicineSchema = new mongoose.Schema({
    RxNORM:{
        type: String,
        required: true,
    },
    Genric:{
        type: String,
        required: true,
    }
    
})

const User = mongoose.model('Genric',MedicineSchema);
module.exports = User;