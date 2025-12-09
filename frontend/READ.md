
---

## 📂 `frontend/README.md`

```md
# Truestate Sales Frontend

React + Vite frontend for the Sales Management dashboard.  
Implements Figma-based UI with:

- Sidebar (Vault / Services / Invoices)
- Summary cards
- Filter bar with dropdowns
- Search bar
- Transaction table with copyable phone numbers
- Pagination
- Quantity range filter (`1–3`, `3–5`, `5+`)

---

## 🔧 Tech Stack

- React (Vite)
- Axios
- IBM Plex Sans (Google Fonts)
- Custom CSS (Figma-inspired)

---

## 📁 Project Structure

```text
frontend/
  src/
    components/
      Layout.jsx
      SummaryCards.jsx
      SearchBar.jsx
      FilterBar.jsx
      TransactionsTable.jsx
      PaginationControls.jsx
    hooks/
      useSalesQueryState.js
    services/
      api.js
      queryString.js
    styles/
      global.css
    main.jsx
    App.jsx
  index.html
  vite.config.js
  .env
  package.json
  README.md
