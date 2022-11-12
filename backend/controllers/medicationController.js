import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
const Medicine = require("../models/medicine");
const Generic = require("../models/genric");
export const createMedication = catchAsyncError(async (req, res, next) => {
    try {
        const { rxnorm, generic, name, brand, route, dosage, frequency, additional } = req.body;
        if (rxnorm && generic && brand) {
            Medicine.create({
                RxNORM: rxnorm,
                Genric: generic,
                FullName: name,
                BrandName: brand,
                route: route,
                dosage: dosage,
                frequency : frequency,
                Additional : additional
            })
            Generic.create({ RxNORM: rxnorm,Genric: generic })
            res.status.json({ message: "Medicine added Successfully !" })
        }
        else res.status(400).json({ message: "Please fill all details" })
        console.log(rxnorm, generic, brand);
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
});
