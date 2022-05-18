import React from "react";
import './index.css';
import {featherShops, runeShops} from './toDo';



function App() {
 
  return (
    
    <div className='App'>
      <main>
        <featherShops name='Feather Shop Run'/> 
        <runeShops name='Rune Shop Run'/>
      </main>
    </div>
  );  
}


export default App;
