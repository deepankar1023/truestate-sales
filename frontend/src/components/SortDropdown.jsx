const SortDropdown = ({ sortBy, sortOrder, onChange }) => {
  const handleChange = e => {
    const value = e.target.value
    if (value === "date") onChange("date", "desc")
    else if (value === "quantity") onChange("quantity", "desc")
    else if (value === "customerName") onChange("customerName", "asc")
  }

  const value =
    sortBy === "quantity"
      ? "quantity"
      : sortBy === "customerName"
      ? "customerName"
      : "date"

  return (
    <div className="sort-dropdown">
      <label>Sort by:</label>
      <select value={value} onChange={handleChange}>
        <option value="date">Date (Newest first)</option>
        <option value="quantity">Quantity</option>
        <option value="customerName">Customer Name (A–Z)</option>
      </select>
    </div>
  )
}

export default SortDropdown
