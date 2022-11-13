import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import Medicine from "../models/medicine.js";
import Generic from "../models/genric.js";
const ADULT_DOSE = 500;
export const GetDetailsController = catchAsyncError(async (req, res, next) => {
    try {
        const { name, weight, age } = req.body;
        if(name && weight && age){
        Medicine.findOne({Genric: name}, function (err, Medi){
            if(Medi) {
                var nage = parseInt(age);
                var dosage = 0;
                if(Medi.dose) dosage = (nage/(nage+12))*Medi.dose;
                else dosage = (nage/(nage+12))*ADULT_DOSE;
                res.status(200).json({details: Medi, dosage: dosage});
            }
            else{
                Medicine.findOne({RxNORM: name}, function (err,Med){
                    if(Med) res.status(200).json({details: Medicine});
                    else res.status(404).json({ message: "Medicine Not found" })
                })
            }
        })
    }
        else res.status(400).json({ message: "Please fill all details" })

    }
    catch (err) {
        res.status(400).json({ message: "Err" })
        
    }
});
