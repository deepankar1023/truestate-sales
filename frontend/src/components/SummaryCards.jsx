import React from 'react';
import './SummaryCards.css'; // We will define this next

// Simple Info Icon SVG to match the image
const InfoIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#6B7280" /* Cool Gray */
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="info-icon"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const SummaryCards = ({ summary, loading }) => {
  const units = summary ? summary.totalUnits : 0;
  const total = summary ? summary.totalAmount : 0;
  const discount = summary ? summary.totalDiscount : 0;

  const formatMoney = n =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(n || 0);

  return (
    <div className="summary-row">
      {/* Card 1: Units */}
      <div className="summary-card">
        <div className="summary-header">
          <span className="summary-label">Total units sold</span>
          <InfoIcon />
        </div>
        <div className="summary-value">
          {loading ? "--" : units}
        </div>
      </div>

      {/* Card 2: Total Amount */}
      <div className="summary-card">
        <div className="summary-header">
          <span className="summary-label">Total Amount</span>
          <InfoIcon />
        </div>
        <div className="summary-value">
          {loading ? "--" : (
             <>
               {formatMoney(total)} 
               {/* Placeholder for the (XX SRs) text seen in image if you have that data */}
               {/* <span className="sub-text"> (19 SRs)</span> */}
             </>
          )}
        </div>
      </div>

      {/* Card 3: Total Discount */}
      <div className="summary-card">
        <div className="summary-header">
          <span className="summary-label">Total Discount</span>
          <InfoIcon />
        </div>
        <div className="summary-value">
          {loading ? "--" : formatMoney(discount)}
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;