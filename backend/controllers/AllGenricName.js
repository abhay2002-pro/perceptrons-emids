import { catchAsyncError } from "../middlewares/catchAsyncError.js";
const Generic = require("../models/genric");

export const GetGenricName = catchAsyncError(async (req, res, next) => {
    try{
        Generic.find({}, function (err, foundNames){
            console.log(foundNames);
            res.status(200).json({GenricName: foundNames});
        })
    }
    catch(err){
        res.status(400).json({Error : err});
    }
});