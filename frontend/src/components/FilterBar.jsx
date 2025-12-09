import React from 'react';
import './FilterBar.css'; // We will define this next

// Simple Refresh/Reset Icon SVG
const ResetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6"></path>
    <path d="M1 20v-6h6"></path>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
  </svg>
);

const formatDate = d => d.toISOString().slice(0, 10);

const FilterBar = ({
  filters,
  onChange,
  sortBy,
  sortOrder,
  onSortChange,
  onReset
}) => {
  const selectSingle = (field, value) => {
    const patch = {};
    patch[field] = value ? [value] : [];
    onChange(patch);
  };

  const handleAgeRangeChange = value => {
    const patch = { ageRange: value };
    if (!value) {
      patch.ageMin = "";
      patch.ageMax = "";
    } else {
      const [min, max] = value.split("-");
      patch.ageMin = min;
      patch.ageMax = max;
    }
    onChange(patch);
  };

  const handleDatePresetChange = value => {
    const patch = { datePreset: value };
    const today = new Date();
    if (!value) {
      patch.dateFrom = "";
      patch.dateTo = "";
    } else if (value === "today") {
      const d = formatDate(today);
      patch.dateFrom = d;
      patch.dateTo = d;
    } else if (value === "last7") {
      const to = formatDate(today);
      const fromDate = new Date(today);
      fromDate.setDate(fromDate.getDate() - 7);
      const from = formatDate(fromDate);
      patch.dateFrom = from;
      patch.dateTo = to;
    } else if (value === "last30") {
      const to = formatDate(today);
      const fromDate = new Date(today);
      fromDate.setDate(fromDate.getDate() - 30);
      const from = formatDate(fromDate);
      patch.dateFrom = from;
      patch.dateTo = to;
    }
    onChange(patch);
  };

  const handleSortChange = e => {
    const value = e.target.value;
    if (value === "name") onSortChange("customerName", "asc");
    else if (value === "date") onSortChange("date", "desc");
    else if (value === "quantity") onSortChange("quantity", "desc");
  };

  const sortValue =
    sortBy === "customerName"
      ? "name"
      : sortBy === "quantity"
      ? "quantity"
      : "date";

  const regionValue = (filters.customerRegion || [])[0] || "";
  const genderValue = (filters.gender || [])[0] || "";
  const categoryValue = (filters.productCategory || [])[0] || "";
  const paymentValue = (filters.paymentMethod || [])[0] || "";
  const tagValue = (filters.tags || [])[0] || "";
  const ageRangeValue = filters.ageRange || "";
  const datePresetValue = filters.datePreset || "";

  return (
    <div className="filter-bar">
      {/* Reset Button */}
      <button className="filter-reset-btn" onClick={onReset} title="Reset filters">
        <ResetIcon />
      </button>

      {/* Filter Pills */}
      <div className="filter-pill">
        <select
          className="filter-select"
          value={regionValue}
          onChange={e => selectSingle("customerRegion", e.target.value)}
        >
          <option value="">Customer Region</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="Central">Central</option>
        </select>
      </div>

      <div className="filter-pill">
        <select
          className="filter-select"
          value={genderValue}
          onChange={e => selectSingle("gender", e.target.value)}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="filter-pill">
        <select
          className="filter-select"
          value={ageRangeValue}
          onChange={e => handleAgeRangeChange(e.target.value)}
        >
          <option value="">Age Range</option>
          <option value="18-25">18–25</option>
          <option value="26-35">26–35</option>
          <option value="36-45">36–45</option>
          <option value="46-60">46–60</option>
          <option value="60-99">60+</option>
        </select>
      </div>

      <div className="filter-pill">
        <select
          className="filter-select"
          value={categoryValue}
          onChange={e => selectSingle("productCategory", e.target.value)}
        >
          <option value="">Product Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Beauty">Beauty</option>
          <option value="Home">Home</option>
        </select>
      </div>

      <div className="filter-pill">
        <select
          className="filter-select"
          value={tagValue}
          onChange={e => selectSingle("tags", e.target.value)}
        >
          <option value="">Tags</option>
          <option value="organic">Organic</option>
          <option value="skincare">Skincare</option>
          <option value="wireless">Wireless</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>

      <div className="filter-pill">
        <select
          className="filter-select"
          value={paymentValue}
          onChange={e => selectSingle("paymentMethod", e.target.value)}
        >
          <option value="">Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
        </select>
      </div>

      <div className="filter-pill">
        <select
          className="filter-select"
          value={datePresetValue}
          onChange={e => handleDatePresetChange(e.target.value)}
        >
          <option value="">Date</option>
          <option value="today">Today</option>
          <option value="last7">Last 7 days</option>
          <option value="last30">Last 30 days</option>
        </select>
      </div>

      {/* Spacer pushes Sort to the right */}
      <div className="filter-spacer" />

      {/* Sort By Section */}
      <div className="filter-pill sort-pill">
          <span className="sort-label">Sort by:</span>
          <select
            className="filter-select"
            value={sortValue}
            onChange={handleSortChange}
          >
            <option value="name">Customer Name (A–Z)</option>
            <option value="date">Date (Newest)</option>
            <option value="quantity">Quantity</option>
          </select>
        </div>
    </div>
  );
};

export default FilterBar;