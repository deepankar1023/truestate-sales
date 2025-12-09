import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import salesRoutes from "./routes/salesRoutes.js"
// import { loadCsvIntoMemory } from "./utils/csvLoader.js"
import connectDB from "./config/db.js" // Import DB config

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

// 1. Connect to MongoDB
await connectDB()

// 2. Seed Data if DB is empty (still uses your CSV file)
// await loadCsvIntoMemory(path.join(__dirname, "..", "data", "sales.csv"))

app.use("/api/sales", salesRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Backend running on port", PORT)
})