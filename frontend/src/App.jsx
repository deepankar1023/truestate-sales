import Layout from "./components/Layout.jsx"
import SummaryCards from "./components/SummaryCards.jsx"
import SearchBar from "./components/SearchBar.jsx"
import FilterBar from "./components/FilterBar.jsx"
import TransactionsTable from "./components/TransactionsTable.jsx"
import PaginationControls from "./components/PaginationControls.jsx"
import useSalesQueryState from "./hooks/useSalesQueryState.js"
import { useEffect, useState } from "react"
import { fetchSales } from "./services/api.js"

const App = () => {
  const { query, setSearch, setFilters, setSort, setPage, reset } =
    useSalesQueryState()
  const [data, setData] = useState([])
  const [summary, setSummary] = useState(null)
  const [meta, setMeta] = useState({ page: 1, totalPages: 1, totalCount: 0 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      setError("")
      try {
        const res = await fetchSales(query)
        setData(res.data)
        setSummary(res.summary)
        setMeta({
          page: res.page,
          totalPages: res.totalPages,
          totalCount: res.totalCount
        })
      } catch (e) {
        console.error(e)
        setError("Failed to load data")
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [query])

  return (
    <Layout>
      <div className="header-row">
        <h1 className="title">Sales Management System</h1>
        <SearchBar value={query.search} onChange={setSearch} />
      </div>
      
      {/* filters + search on same row */}
      <div className="filters-row">
      {/* <SearchBar value={query.search} onChange={setSearch} /> */}
        <FilterBar
          filters={query}
          onChange={setFilters}
          sortBy={query.sortBy}
          sortOrder={query.sortOrder}
          onSortChange={setSort}
          onReset={reset}
        />
        
      </div>

      {/* summary cards under filters */}
      <div className="top-row">
        <SummaryCards summary={summary} loading={loading} />
      </div>

      <div className="table-wrapper">
        {loading && <div className="placeholder">Loading...</div>}
        {!loading && error && <div className="placeholder error">{error}</div>}
        {!loading && !error && data.length === 0 && (
          <div className="placeholder">No results for current search and filters.</div>
        )}
        {!loading && !error && data.length > 0 && (
          <TransactionsTable rows={data} />
        )}
      </div>

      <div className="pagination-row">
        <PaginationControls
          page={meta.page}
          totalPages={meta.totalPages}
          onPageChange={setPage}
        />
        
      </div>
    </Layout>
  )
}

export default App
