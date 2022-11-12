import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import Medicine from "../models/medicine.js";
import Generic from "../models/genric.js";

export const GetGenricName = catchAsyncError(async (req, res, next) => {
    try{
        console.log("getting genric");
        Generic.find({}, function (err, foundNames){
            if(err){
                console.log(err);
            }
        console.log("getting");

            // console.log(foundNames);
            res.status(200).json({GenricName: foundNames});
        })
    }
    catch(err){
        res.status(400).json({Error : err});
    }
});