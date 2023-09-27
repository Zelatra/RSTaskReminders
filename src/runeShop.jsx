import React, {useState} from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

function RuneShops(props) {

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
      <h1 className='taskTitle'><button className="rune-btn" onClick={() => {switchFavorite();}}>{icon ? <AiOutlineStar /> : <AiFillStar />}</button>{props.name}</h1>
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
      <div className="btn-position">
      <button className="finish-btn" onClick={() => {handleToggle(); refreshName();}}>{btnName ? "complete" : "refresh"}
      </button>
      </div>
    </div>
  );
};  

export default RuneShops;