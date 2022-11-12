import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";


export const createMedication = catchAsyncError(async (req, res, next) => {
    const { rxnorm, generic, brand, route, dosage, additional } = req.body;
    console.log(rxnorm, generic, brand);
});
  