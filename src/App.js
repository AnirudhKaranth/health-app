import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nutrients from "./components/Nutrients";
import Navbar from "./components/Navbar";

function App() {

  const data = [
    {
      age: "1-4",
      gender: "F",
      carbohydrates: "130",
      protiens: "13",
      lipids: "30-40",
      water: "1-1.3",
      vitaminA: "300",
      vitaminE: "6",
      vitaminD: "600",
      vitaminC: "15",
      vitaminK: "30",
      vitaminB6: "0.5",
      VITAMINB12: "0.9",
      CALCIUM: "700",
      IRON: "7",
      MAGNESIUM: "80",
      PHOSPHOROUS: "460",
      POTASSIUM: "3000",
      SODIUM: "1500",
      ZINC: "3",
      COPPER: "0.34",
      MANGANESE: "1.2",
      SELENIUM: "20",
    },
    {
      age: "1-4",
      gender: "M",
      carbohydrates: "130",
      protiens: "13",
      lipids: "30-40",
      water: "1-1.3",
      vitaminA: "300",
      vitaminE: "6",
      vitaminD: "600",
      vitaminC: "15",
      vitaminK: "30",
      vitaminB6: "0.5",
      VITAMINB12: "0.9",
      CALCIUM: "700",
      IRON: "7",
      MAGNESIUM: "80",
      PHOSPHOROUS: "460",
      POTASSIUM: "3000",
      SODIUM: "1500",
      ZINC: "3",
      COPPER: "0.34",
      MANGANESE: "1.2",
      SELENIUM: "20",
    },
    {
      age: "4-8",
      gender: "F",
      carbohydrates: "130",
      protiens: "19",
      lipids: "30-40",
      water: "1.3-1.7",
      vitaminA: "400",
      vitaminE: "7",
      vitaminD: "600",
      vitaminC: "25",
      vitaminK: "55",
      vitaminB6: "0.6",
      VITAMINB12: "1.2",
      CALCIUM: "1000",
      IRON: "10",
      MAGNESIUM: "130",
      PHOSPHOROUS: "500",
      POTASSIUM: "3800",
      SODIUM: "1900",
      ZINC: "5",
      COPPER: "0.44",
      MANGANESE: "1.5",
      SELENIUM: "30",
    },
    {
      age: "4-8",
      gender: "M",
      carbohydrates: "130",
      protiens: "19",
      lipids: "30-40",
      water: "1.3-1.7",
      vitaminA: "400",
      vitaminE: "7",
      vitaminD: "600",
      vitaminC: "25",
      vitaminK: "555",
      vitaminB6: "0.6",
      VITAMINB12: "1.2",
      CALCIUM: "1000",
      IRON: "10",
      MAGNESIUM: "130",
      PHOSPHOROUS: "500",
      POTASSIUM: "3800",
      SODIUM: "1900",
      ZINC: "5",
      COPPER: "0.44",
      MANGANESE: "1.5",
      SELENIUM: "30",
    },
    {
      age: "9-13",
      gender: "F",
      carbohydrates: "130",
      protiens: "34",
      lipids: "25-35",
      water: "2.1-2.3",
      vitaminA: "600",
      vitaminE: "11",
      vitaminD: "600",
      vitaminC: "45",
      vitaminK: "60",
      vitaminB6: "1",
      VITAMINB12: "1.8",
      CALCIUM: "1300",
      IRON: "8",
      MAGNESIUM: "240",
      PHOSPHOROUS: "1250",
      POTASSIUM: "4500",
      SODIUM: "2200",
      ZINC: "8",
      COPPER: "0.7",
      MANGANESE: "1.6",
      SELENIUM: "40",
    },
    {
      age: "9-13",
      gender: "M",
      carbohydrates: "130",
      protiens: "34",
      lipids: "30-45",
      water: "2.1-2.4",
      vitaminA: "600",
      vitaminE: "11",
      vitaminD: "600",
      vitaminC: "45",
      vitaminK: "60",
      vitaminB6: "1",
      VITAMINB12: "1.8",
      CALCIUM: "1300",
      IRON: "8",
      MAGNESIUM: "240",
      PHOSPHOROUS: "1250",
      POTASSIUM: "4500",
      SODIUM: "2200",
      ZINC: "8",
      COPPER: "0.7",
      MANGANESE: "1.9",
      SELENIUM: "40",
    },
    {
      age: "14-18",
      gender: "F",
      carbohydrates: "130",
      protiens: "46",
      lipids: "25-50",
      water: "2.3-2.7",
      vitaminA: "700",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "65",
      vitaminK: "75",
      vitaminB6: "1.2",
      VITAMINB12: "2.4",
      CALCIUM: "1300",
      IRON: "15",
      MAGNESIUM: "360",
      PHOSPHOROUS: "1250",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "9",
      COPPER: "0.89",
      MANGANESE: "1.6",
      SELENIUM: "55",
    },
    {
      age: "14-18",
      gender: "M",
      carbohydrates: "130",
      protiens: "52",
      lipids: "35-60",
      water: "2.4-3.3",
      vitaminA: "900",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "75",
      vitaminK: "75",
      vitaminB6: "1.3",
      VITAMINB12: "2.4",
      CALCIUM: "1300",
      IRON: "11",
      MAGNESIUM: "410",
      PHOSPHOROUS: "1250",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "11",
      COPPER: "0.89",
      MANGANESE: "2.2",
      SELENIUM: "55",
    },
    {
      age: "19-30",
      gender: "F",
      carbohydrates: "130",
      protiens: "46",
      lipids: "44-78",
      water: "2.7",
      vitaminA: "700",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "75",
      vitaminK: "90",
      vitaminB6: "1.3",
      VITAMINB12: "2.4",
      CALCIUM: "1000",
      IRON: "18",
      MAGNESIUM: "310",
      PHOSPHOROUS: "700",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "8",
      COPPER: "0.9",
      MANGANESE: "1.8",
      SELENIUM: "55",
    },
    {
      age: "19-30",
      gender: "M",
      carbohydrates: "130",
      protiens: "56",
      lipids: "44-78",
      water: "3.7",
      vitaminA: "900",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "90",
      vitaminK: "120",
      vitaminB6: "1.3",
      VITAMINB12: "2.4",
      CALCIUM: "1000",
      IRON: "8",
      MAGNESIUM: "400",
      PHOSPHOROUS: "700",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "11",
      COPPER: "0.9",
      MANGANESE: "2.3",
      SELENIUM: "55",
    },
    {
      age: "31-50",
      gender: "F",
      carbohydrates: "130",
      protiens: "46",
      lipids: "44-78",
      water: "2.7",
      vitaminA: "700",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "75",
      vitaminK: "90",
      vitaminB6: "1.3",
      VITAMINB12: "2.4",
      CALCIUM: "1000",
      IRON: "18",
      MAGNESIUM: "320",
      PHOSPHOROUS: "700",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "8",
      COPPER: "0.9",
      MANGANESE: "1.8",
      SELENIUM: "55",
    },
    {
      age: "31-50",
      gender: "M",
      carbohydrates: "130",
      protiens: "56",
      lipids: "44-78",
      water: "3.7",
      vitaminA: "900",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "90",
      vitaminK: "120",
      vitaminB6: "1.3",
      VITAMINB12: "2.4",
      CALCIUM: "1000",
      IRON: "8",
      MAGNESIUM: "420",
      PHOSPHOROUS: "700",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "11",
      COPPER: "0.9",
      MANGANESE: "2.3",
      SELENIUM: "55",
    },
    {
      age: "50+",
      gender: "F",
      carbohydrates: "130",
      protiens: "46",
      lipids: "44-78",
      water: "2.7",
      vitaminA: "700",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "75",
      vitaminK: "90",
      vitaminB6: "1.5",
      VITAMINB12: "2.4",
      CALCIUM: "1200",
      IRON: "8",
      MAGNESIUM: "320",
      PHOSPHOROUS: "700",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "8",
      COPPER: "0.9",
      MANGANESE: "1.8",
      SELENIUM: "55",
    },
    {
      age: "50+",
      gender: "M",
      carbohydrates: "130",
      protiens: "56",
      lipids: "44-78",
      water: "3.7",
      vitaminA: "900",
      vitaminE: "15",
      vitaminD: "600",
      vitaminC: "90",
      vitaminK: "120",
      vitaminB6: "1.7",
      VITAMINB12: "2.4",
      CALCIUM: "1200",
      IRON: "8",
      MAGNESIUM: "420",
      PHOSPHOROUS: "700",
      POTASSIUM: "4700",
      SODIUM: "2300",
      ZINC: "11",
      COPPER: "0.9",
      MANGANESE: "2.3",
      SELENIUM: "55",
    },
  ];

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home data={data}/>}/>
      <Route path="/nutrients" element={ <Nutrients/>}/>

    </Routes>
      
     
      
    </BrowserRouter>
  );
}

export default App;
