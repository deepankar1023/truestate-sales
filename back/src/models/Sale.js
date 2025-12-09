import mongoose from "mongoose"

const saleSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  customerId: String,
  customerName: String,
  phoneNumber: String,
  gender: String,
  age: Number,
  customerRegion: String,
  customerType: String,
  productId: String,
  productName: String,
  brand: String,
  productCategory: String,
  tags: [String], 
  quantity: Number,
  pricePerUnit: Number,
  discountPercentage: Number,
  totalAmount: Number,
  finalAmount: Number,
  paymentMethod: String,
  orderStatus: String,
  deliveryType: String,
  storeId: String,
  storeLocation: String,
  salespersonId: String,
  employeeName: String
})


saleSchema.index({ customerName: "text", phoneNumber: "text" })
saleSchema.index({ customerRegion: 1 })
saleSchema.index({ date: 1 })

const Sale = mongoose.model("Sale", saleSchema)

export default Sale