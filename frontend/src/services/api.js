import axios from "axios"
import { toQueryString } from "../utils/queryString.js"

const BASE_URL = import.meta.env.VITE_API_URL

export const fetchSales = async (query) => {
  const qs = toQueryString(query)
  const url = `${BASE_URL}/api/sales${qs ? "?" + qs : ""}`

  try {
    const res = await axios.get(url)
    console.log("API response:", res.data)
    return res.data
  } catch (err) {
    console.error("API error:", err.response?.data || err.message)
    throw err
  }
}
