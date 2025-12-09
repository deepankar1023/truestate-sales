import express from "express"
import { getSalesHandler } from "../controllers/salesController.js"

const router = express.Router()

router.get("/", getSalesHandler)

export default router
