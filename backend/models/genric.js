const mongoose = require('mongoose');
const MedicineSchema = new mongoose.Schema({
   
    Genric:{
        type: String,
        required: true,
    }
    
})

const User = mongoose.model('Genric',MedicineSchema);
module.exports = User;