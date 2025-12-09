import { useState } from "react"

const defaultState = {
  search: "",
  customerRegion: [],
  gender: [],
  productCategory: [],
  paymentMethod: [],
  tags: [],
  ageMin: "",
  ageMax: "",
  ageRange: "",
  dateFrom: "",
  dateTo: "",
  datePreset: "",
  sortBy: "customerName",
  sortOrder: "asc",
  page: 1,
  limit: 10
}

const useSalesQueryState = () => {
  const [query, setQuery] = useState(defaultState)

  const setSearch = value =>
    setQuery(prev => ({
      ...prev,
      search: value,
      page: 1
    }))

  const setFilters = patch =>
    setQuery(prev => ({
      ...prev,
      ...patch,
      page: 1
    }))

  const setSort = (sortBy, sortOrder) =>
    setQuery(prev => ({
      ...prev,
      sortBy,
      sortOrder,
      page: 1
    }))

  const setPage = page =>
    setQuery(prev => ({
      ...prev,
      page
    }))

  const reset = () => setQuery(defaultState)

  return { query, setSearch, setFilters, setSort, setPage, reset }
}

export default useSalesQueryState
