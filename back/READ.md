# Truestate Sales Backend

Node + Express + MongoDB backend for the Sales Management dashboard.  
Provides a paginated, filterable `/api/sales` endpoint along with summary stats.

---

## 🔧 Tech Stack

- Node.js (ES Modules)
- Express
- MongoDB + Mongoose
- CORS
- dotenv
- nodemon (dev)

---

## 📁 Project Structure

```text
backend/
  src/
    models/
      Sale.js
    services/
      salesService.js
    routes/
      salesRoutes.js
    server.js
  .env
  package.json
  README.md
