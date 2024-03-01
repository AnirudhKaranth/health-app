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

  
  const startIndex = (currentPage - 1) * itemsPerPage + 2; 
  const endIndex = startIndex + itemsPerPage;

  const currentItems = nutrientsData.slice(startIndex, endIndex);

  if (!reqData) {
    navigate("/");
  }

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-start mt-10 h-screen">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">Nutrients</h2>
        <p>
          Age: {reqData.age}, Gender: {reqData.gender}
        </p>
      </div>
      <table className="border-collapse border border-gray-400 table-auto mb-4">
        <thead>
          <tr>
            <th className="p-2 border border-gray-400 w-48">Nutrient</th>
            <th className="p-2 border border-gray-400 w-48">Value</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(([nutrient, value]) => (
            <tr key={nutrient} className="border border-gray-400">
              <td className="p-2 border border-gray-400 w-48">{nutrient}</td>
              <td className="p-2 border border-gray-400 w-48">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mb-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 mr-2 bg-blue-500 text-white">
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button onClick={handleNextPage} disabled={endIndex >= nutrientsData.length} className="px-4 py-2 ml-2 bg-blue-500 text-white">
          Next
        </button>
      </div>
      <div>
      <button onClick={handleGoBack} className="mt-auto px-4 py-2 bg-blue-500 text-white">
        Retry
      </button>

      </div>
    </div>
  );
};

export default Nutrients;
