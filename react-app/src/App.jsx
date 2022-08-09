
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Pets from "./components/pets/Pets";
import Trade from "./components/trade/trade";
import RowAndColumnSpacing from "./components/profile/profile";
import ButtonAppBar from "./components/header/header";
const App = () => {
  return (
    
    <BrowserRouter>
   
      <Routes>
          <Route exact path="/" element={<Login />} />  
          <Route path="/dashboard/securities" element = {<Pets />}> </Route> 
          {/* <Route path="/pets" element = {<Pets />}> </Route>  */}
          <Route path="/trade/:id" element = {<Trade />}> </Route> 
          <Route path="/profile" element = {<RowAndColumnSpacing />}> </Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
