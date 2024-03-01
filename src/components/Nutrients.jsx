import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nutrients = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reqData = location.state?.reqData;

  const nutrientsData = Object.entries(reqData);
  
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extract the items for the current page
  const currentItems = nutrientsData.slice(startIndex, endIndex);

  if (!reqData) {
    navigate("/");
  }
  console.log(reqData);
  return  (
    <div>
      <h2>Nutrients</h2>
      <table>
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(([nutrient, value]) => (
            <tr key={nutrient}>
              <td>{nutrient}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button onClick={handleNextPage} disabled={endIndex >= nutrientsData.length}>
          Next
        </button>
      </div>
    </div>
  );;
};

export default Nutrients;
