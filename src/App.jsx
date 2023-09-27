// import React, { useState } from "react";
import './index.css';
// import Content from './Content';
// import Categories from './Categories';
import Home from './Pages/Home';
// import MarketWatch from './Pages/Market-watch';
// import Profile from "./Pages/Profile";
// import CreateReminder from "./Pages/Create-reminder"
// import Navigation  from './Pages/Navigation';
// import FeatherShops from './feathers';
// import { DndDaily, DndMonthly, DndWeekly } from './DnD';
// import RuneShops from './runeShop';
import NavBar from './Navbar';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home></Home>
    </div>
  );  
}



export default App;
