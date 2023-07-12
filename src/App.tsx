import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import { GlobalStyles } from "./common/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Step1/>} />
        <Route path="/2" element={<Step2/>} />
        <Route path="/3" element={<Step3/>} />
      </Routes>
    </Router>
  );
}

export default App;
