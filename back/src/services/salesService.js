import Sale from "../models/Sale.js"

export const getSales = async (query) => {
  const {
    search,
    customerRegion,
    gender,
    productCategory,
    tags,
    paymentMethod,
    ageMin,
    ageMax,
    dateFrom,
    dateTo,
    sortBy,
    sortOrder,
    page,
    limit
  } = query

  
  const matchStage = {}

  
  if (search) {
    
    const searchRegex = { $regex: search.trim(), $options: "i" }
    
    matchStage.$or = [
      { customerName: searchRegex },
      { phoneNumber: searchRegex } 
    ]
  }

  const normalizeArray = (val) => (val ? (Array.isArray(val) ? val : val.split(",")) : [])
  if (customerRegion) matchStage.customerRegion = { $in: normalizeArray(customerRegion) }
  if (gender) matchStage.gender = { $in: normalizeArray(gender) }
  if (productCategory) matchStage.productCategory = { $in: normalizeArray(productCategory) }
  if (paymentMethod) matchStage.paymentMethod = { $in: normalizeArray(paymentMethod) }

  if (tags) {
    const tagList = normalizeArray(tags).map(t => t.trim()) 
    matchStage.tags = { $in: tagList }
  }


  if (ageMin || ageMax) {
    matchStage.age = {}
    if (ageMin) matchStage.age.$gte = Number(ageMin)
    if (ageMax) matchStage.age.$lte = Number(ageMax)
  }


if (dateFrom || dateTo) {
  matchStage.date = {};
  
  if (dateFrom) {
    matchStage.date.$gte = new Date(dateFrom); 
  }
  
  if (dateTo) {
   
    const dateToObj = new Date(dateTo);
    dateToObj.setDate(dateToObj.getDate() + 1); 
    matchStage.date.$lt = dateToObj; 
  }
}

  
  const summaryPromise = Sale.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: null,
        totalUnits: { $sum: "$quantity" },
        totalAmount: { $sum: "$finalAmount" },
        totalDiscount: { $sum: { $subtract: ["$totalAmount", "$finalAmount"] } }
      }
    }
  ])

 
  const sortField = sortBy || "date"
  const sortDir = sortOrder === "desc" || (!sortOrder && sortField === "date") ? -1 : 1
  const sortOptions = { [sortField]: sortDir }

  
  const pageNum = Number(page) || 1
  const limitNum = Number(limit) || 10
  const skip = (pageNum - 1) * limitNum

  const [data, totalCount, summaryResult] = await Promise.all([
    Sale.find(matchStage).sort(sortOptions).skip(skip).limit(limitNum),
    Sale.countDocuments(matchStage),
    summaryPromise
  ])

 
  const summary = summaryResult[0] || { totalUnits: 0, totalAmount: 0, totalDiscount: 0 }

  return {
    page: pageNum,
    limit: limitNum,
    totalCount: totalCount,
    totalPages: Math.max(1, Math.ceil(totalCount / limitNum)),
    data: data,
    summary: {
      totalUnits: summary.totalUnits,
      totalAmount: summary.totalAmount,
      totalDiscount: summary.totalDiscount
    },
    sortBy: sortField,
    sortOrder: sortDir === -1 ? "desc" : "asc"
  }
}