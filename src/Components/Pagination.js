import React from "react";

function Pagination({ coinPP, totalCoin, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoin / coinPP); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
