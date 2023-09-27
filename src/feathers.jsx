import React, {useState} from "react";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

function FeatherShops(props) {
  
const [divName, setDivName] = useState(true);
const [btnName, setBtnName] = useState(true);
const [icon, setIcon] = useState(true);

const switchFavorite = () => {
  setIcon(!icon);
}

const handleToggle = () => {
  setDivName(!divName);
}
const refreshName = () => {
  setBtnName(!btnName);
}

  return (
    <div className={divName ? "ToDo" : "complete-task"}> 
      <h1 className='taskTitle'><button className="feather-btn" onClick={() => {switchFavorite();}}>{icon ? <AiOutlineStar /> : <AiFillStar />}</button>{props.name}</h1>
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
          <li><input type="checkbox" />Fishing guild, Roachery</li>
        </ul>
        <div className="btn-position">
      <button onClick={() => {handleToggle(); refreshName();}}>{btnName ? "complete" : "refresh"}
      </button>
      </div>
    </div>
  );
}

export default FeatherShops;