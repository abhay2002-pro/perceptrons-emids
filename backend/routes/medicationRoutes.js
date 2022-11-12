import express from 'express';
import { createMedication } from '../controllers/medicationController.js';
import {AllGeneric } from '../controllers/AllGenricName';
import {GetDetailsController} from "../controllers/GetDetailsController";
const router = express.Router();

router.route("/").post(createMedication);
router.route("/genric"),get(AllGeneric);
router.route("/getdetails").post(GetDetailsController);
export default router;
