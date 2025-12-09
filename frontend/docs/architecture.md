# Architecture

## Backend
- Node.js + Express
- CSV loaded once into in-memory store on startup
- Service layer applies search, filters, sorting and pagination
- Single endpoint: GET /api/sales
- Response includes: data, page, totalPages, totalCount, summary

## Frontend
- React + Vite
- Local state for query (search, filters, sort, pagination)
- `useSalesQueryState` hook manages query object
- `api.js` converts query to querystring and fetches from backend
- Components:
  - Layout: shell + sidebar
  - SummaryCards: KPIs
  - SearchBar, FilterBar, SortDropdown: controls
  - TransactionsTable: paginated list
  - PaginationControls: next/prev

## Data Flow
User action → updates query state → API request `/api/sales?…` → backend filters/sorts/paginates → JSON → render table + summary.
