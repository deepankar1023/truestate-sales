const PaginationControls = ({ page, totalPages, onPageChange }) => {
  
  const getPageNumbers = () => {
    const limit = 6; 
    let start = page - Math.floor(limit / 2);
    
    
    if (start < 1) {
      start = 1;
    }

   
    let end = start + limit - 1;
    if (end > totalPages) {
      end = totalPages;
      
      start = Math.max(1, end - limit + 1);
    }

    
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getPageNumbers();

  return (
    <div className="pagination-controls">
      {visiblePages.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`pagination-btn ${page === pageNum ? 'active' : ''}`}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;