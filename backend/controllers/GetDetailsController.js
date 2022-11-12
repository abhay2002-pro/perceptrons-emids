import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
const Medicine = require("../models/medicine");
const ADULT_DOSE = 500;
export const createMedication = catchAsyncError(async (req, res, next) => {
    try {
        const { name, weight, age } = req.body;
        if(name && weight && age){
        Medicine.findOne({Genric: name}, function (err, Medi){
            if(Medi) {
                age = ParseInt(age);
                if(Medi.dose) dosage = (age/(age+12))*Medi.dose;
                else dosage = (age/(age+12))*ADULT_DOSE;
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
        console.log(rxnorm, generic, brand);
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
});
