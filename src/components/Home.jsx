import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ data }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState("");
  const navigate = useNavigate();
  let reqData;

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(selectedAge==="" || selectedGender===null){
        alert("Please provide all values")
        return
    }

    for (let i = 0; i < data?.length; i++) {
      if (selectedAge === data[i].age && selectedGender === data[i].gender) {
        reqData = data[i];
      }
    }

    setSelectedAge("");
    setSelectedGender(null);
    navigate("/nutrients", { state: { reqData } });
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100 pt-5">
      <form className="bg-white p-8 rounded shadow-md w-1/3 mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Select Age:</label>
          <select
            className="border border-gray-300 rounded w-full p-2"
            onChange={handleAgeChange}
            value={selectedAge}
          >
            <option value="" disabled>
              Choose Age Group
            </option>
            <option value="1-3">1-3</option>
            <option value="4-8">4-8</option>
            <option value="9-13">9-13</option>
            <option value="14-18">14-18</option>
            <option value="19-30">19-30</option>
            <option value="31-50">31-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-gray-700 font-bold">Select Gender:</label>
          <div className="flex">
            <label className="flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="M"
                checked={selectedGender === "M"}
                onChange={() => handleGenderChange("M")}
                className="mr-1"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="F"
                checked={selectedGender === "F"}
                onChange={() => handleGenderChange("F")}
                className="mr-1"
              />
              Female
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
