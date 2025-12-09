import Sale from "../models/Sale.js" 

const parseDate = (dateStr) => {
 
  if (!dateStr || dateStr.trim() === "") return new Date()

  let dateObj
  const parts = dateStr.trim().split("-")

  
  if (parts.length === 3) {
    
    dateObj = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
  } else {
    
    dateObj = new Date(dateStr)
  }

  
  if (isNaN(dateObj.getTime())) {
    console.warn(`[CSV Warning] Could not parse date: "${dateStr}". Defaulting to current date.`)
    return new Date()
  }

  return dateObj
}


 
export const getSalesData = async () => {
  try {
    console.log("Fetching all sales data from MongoDB...")
    
    
    const sales = await Sale.find({})

    console.log(`Successfully retrieved ${sales.length} sales records.`)
    return sales
  } catch (error) {
    console.error("Error fetching sales data from MongoDB:", error.message)
    
    throw error
  }
}