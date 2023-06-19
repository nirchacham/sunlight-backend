import express from "express";
import BirdsController from "../controllers/birds.controller";

const router = express.Router();


//@GET
router.get('/',BirdsController.getBirds)

export default router;
