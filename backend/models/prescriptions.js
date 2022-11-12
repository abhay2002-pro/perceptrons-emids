import {mongoose} from 'mongoose';
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
    frequency:{
        type: Number,
        required: true,
    },
    Additional:{
        type: String,
        required: true,
    },
})

const Pres = mongoose.model('Pres',MedicineSchema);
export default  Pres;
