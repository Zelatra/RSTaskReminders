//import { render } from '@testing-library/react';
import './index.css';



export function featherShops(props) {
   
  return (
        <div className='ToDo'> 
            <h1 className='taskTitle'>{props.name}</h1>
             <ul className='Objectives'>
               <li><input type="checkbox" />Draynor Manor, Ava</li>
               <li><input type="checkbox" />Etceteria, Fishmonger</li>
               <li><input type="checkbox" />Miscellenia, Fishmonger</li>
               <li><input type="checkbox" />Relleka, Fishmonger</li>
               <li><input type="checkbox" />port Sarim, Gerrant</li>
               <li><input type="checkbox" />Oo'glog, Frawd</li>
               <li><input type="checkbox" />Lumbridge, Hank</li>
               <li><input type="checkbox" />Menaphos, Meena</li>
               <li><input type="checkbox" />Shantay Pass, Shantay</li>
               <li><input type="checkbox" />Shilo village, Fernahei</li>
               <li><input type="checkbox" />Anachronia, General store assistant</li>
             </ul>
        </div>
    )
   };
  

export function runeShops(props) {

  return (
    <div className='ToDo'>
      <h1 className='taskTitle'>{props.name}</h1>
        <ul className='Objectives'>
          <li><input type="checkbox" />Varrock, Aubury</li>
          <li><input type="checkbox" />Lunar Isle, Baba Yaga</li>
          <li><input type="checkbox" />Yanille, Magic store owner</li>
          <li><input type="checkbox" />Al Kharid, Ali Morrisane</li>
          <li><input type="checkbox" />Mage Arena Basement, Lundail</li>
          <li><input type="checkbox" />Edgeville, Mage of Zamorak</li>
          <li><input type="checkbox" />Void Knight Outpost, Void Knight Squire</li>
          <li><input type="checkbox" />Ape Atoll, Tutab</li>
          <li><input type="checkbox" />Burthorpe, Apprentice Clara</li>
          <li><input type="checkbox" />Port Sarim, Betty</li>
          <li><input type="checkbox" />Anachronia, Rune Store Assistant</li>
        </ul>
    </div>
  )
};  
