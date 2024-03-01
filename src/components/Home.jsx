import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ data }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState("");
  const navigate = useNavigate()
  let reqData;
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    for(let i=0;i<data?.length;i++){
        if(selectedAge===data[i].age && selectedGender === data[i].gender){
            reqData = data[i]
            console.log("first")
        }
    }

    setSelectedAge("")
    setSelectedGender(null)
    navigate("/nutrients",{ state: { reqData } })
    
}

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="w-1/3 h-1/2 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="mb-4 w-full flex justify-center items-center gap-2">
          <label className="block">Select Age:</label>
          <select
            className=" border border-gray-300 rounded"
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
        <div className="flex items-center justify-center gap-2">
          <label className="block ">Select Gender:</label>
          <div className="flex ">
            <label className="flex items-center mr-2">
              <input
                type="radio"
                name="gender"
                value="M"
                checked={selectedGender === "M"}
                onChange={() => handleGenderChange("M")}
                className=""
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
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
    <button type="submit" className="w-1/3 bg-blue-400">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
