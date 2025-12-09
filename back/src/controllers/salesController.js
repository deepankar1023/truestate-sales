import { getSales } from "../services/salesService.js"

export const getSalesHandler = async (req, res) => {
  try {
    
    const result = await getSales(req.query)
    res.json(result)
  } catch (e) {
    console.error(e) 
    res.status(500).json({ message: "Internal server error" })
  }
}