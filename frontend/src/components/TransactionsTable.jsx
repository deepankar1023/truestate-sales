import React from 'react';
import './TransactionsTable.css'; // We will create this CSS file next

const TransactionsTable = ({ rows }) => {
  
  // Helper to format phone numbers
  const formatPhone = (value) => {
    if (!value) return "";
    const digits = String(value).replace(/\D/g, "");
    // Returns format: +91 9123456789
    return `+91 ${digits.slice(-10)}`;
  };

  // Helper to format currency (e.g. ₹ 1,000)
  const formatCurrency = (amount) => {
    if (!amount) return "₹ 0";
    return `₹ ${Number(amount).toLocaleString('en-IN')}`;
  };

  const handleCopy = (value) => {
    navigator.clipboard.writeText(formatPhone(value));
  };

  return (
    <div className="table-scroll-container">
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Customer ID</th>
            <th>Customer name</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Product Category</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Customer region</th>
            <th>Product ID</th>
            <th>Employee name</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.transactionId}-${index}`}>
              <td className="text-gray">{row.transactionId}</td>
              <td className="text-gray">{row.date}</td>
              <td className="text-gray">{row.customerId}</td>
              <td className="text-gray">{row.customerName}</td>
              
              {/* Phone Cell with Icon */}
              <td className="phone-cell">
                <span>{formatPhone(row.phoneNumber)}</span>
                <button 
                  className="copy-btn" 
                  onClick={() => handleCopy(row.phoneNumber)}
                  title="Copy Number"
                >
                  {/* SVG Icon matching the image (two overlapping squares) */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </td>

              <td className="text-gray">{row.gender}</td>
              <td className="text-gray">{row.age}</td>
              <td className="text-dark-bold">{row.productCategory}</td>
              <td className="text-dark-bold">{String(row.quantity).padStart(2, "0")}</td>
              <td className="text-dark-bold">{formatCurrency(row.totalAmount)}</td>
              <td className="text-dark-bold">{row.customerRegion}</td>
              <td className="text-dark-bold">{row.productId}</td>
              <td className="text-dark-bold">{row.employeeName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;