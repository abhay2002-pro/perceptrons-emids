import express from 'express';
import { createMedication } from '../controllers/medicationController.js';
import {GetGenricName } from '../controllers/AllGenricName.js';
import {GetDetailsController} from "../controllers/GetDetailsController.js";
const router = express.Router();

router.route("/").post(createMedication);
router.route("/genric").get(GetGenricName);
router.route("/getdetails").post(GetDetailsController);
export default router;
