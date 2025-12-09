import axios from "axios"
import { toQueryString } from "../utils/queryString.js"

const BASE_URL = "http://localhost:5000"

export const fetchSales = async (query) => {
  const qs = toQueryString(query)
  const url = `${BASE_URL}/api/sales${qs ? "?" + qs : ""}`
  const res = await axios.get(url)
  console.log("API response:", res.data) // debug
  return res.data
}
