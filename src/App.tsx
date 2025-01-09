import React from "react";
import LandingPage from "../src/Pages/LandingPage/LandingPage"
import DisplayPage from "../src/Pages/DisplayPage/DisplayPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
  
          <Route path="/" element={<LandingPage />} />
          <Route path="/display" element={<DisplayPage />} />
  
        </Routes>
    </BrowserRouter>
  );

};



export default App;
