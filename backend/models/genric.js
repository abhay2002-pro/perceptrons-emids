import {mongoose} from 'mongoose';
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

const Generic = mongoose.model('Generic',MedicineSchema);
// module.exports = Generic;
export default Generic;