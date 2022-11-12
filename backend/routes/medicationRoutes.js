import express from 'express';
import { createMedication } from '../controllers/medicationController.js';

const router = express.Router();

router.route("/courses").post(createMedication);

export default router
