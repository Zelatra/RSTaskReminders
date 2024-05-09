import React, {useState} from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';


function DndDaily(props) {

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
        <h1 className='taskTitle'><button className="daily-btn" onClick={() => {switchFavorite();}}>{icon ? <AiOutlineStar /> : <AiFillStar />}</button>{props.name}</h1>
        <ul className='Objectives'>
            <li><input type="checkbox" />Daily challenges</li>
            <li><input type="checkbox" />Wilderness Warbands</li>
            <li><input type="checkbox" />Sinkholes</li>
            <li><input type="checkbox" />Guthixian cache</li>
            <li><input type="checkbox" />Big Chinchompa</li>
            <li><input type="checkbox" />Divine locations</li>
            <li><input type="checkbox" />Jack of trades aura</li>
            <li><input type="checkbox" />Reaper assignment</li>
            <li><input type="checkbox" />Red and crystal Sandstone</li>
            <li><input type="checkbox" />Vis wax</li>
            <li><input type="checkbox" />Wicked hood teleport/free essence</li>
            <li><input type="checkbox" />Free item from Motherlode Maw</li>
            <li><input type="checkbox" />Collect items from modified skilling outfits</li>
            <li><input type="checkbox" />Nemi forest</li>
            <li><input type="checkbox" />ports</li>
            <li><input type="checkbox" />Arc claimed island</li>
          </ul>
          <div className="btn-position">
      <button className="finish-btn" onClick={() => {handleToggle(); refreshName();}}>{btnName ? "complete" : "refresh"}
      </button>
      </div>
      </div>
    );
  }

function DndWeekly(props) {

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
            <h1 className='taskTitle'><button className="weekly-btn" onClick={() => {switchFavorite();}}>{icon ? <AiOutlineStar /> : <AiFillStar />}</button>{props.name}</h1>
            <ul className='Objectives'>
                <li><input type="checkbox" />Big top bonanza circus</li>
                <li><input type="checkbox" />Penguin hide and seek</li>
                <li><input type="checkbox" />Tears of Guthix</li>
                <li><input type="checkbox" />Cap clan citadel</li>
                <li><input type="checkbox" />Help Meg</li>
                <li><input type="checkbox" />Herby Werby</li>
                <li><input type="checkbox" />Anachronia totems</li>
            </ul>
          <div className="btn-position">
            <button className="finish-btn" onClick={() => {handleToggle(); refreshName();}}>{btnName ? "complete" : "refresh"}
            </button>
          </div>
        </div>
    );
}

function DndMonthly(props) {

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
            <h1 className='taskTitle'><button className="monthly-btn" onClick={() => {switchFavorite();}}>{icon ? <AiOutlineStar /> : <AiFillStar />}</button>{props.name}</h1>
            <ul className='Objectives'>
                <li><input type="checkbox" />Troll Invasion</li>
                <li><input type="checkbox" />God Statues</li>
                <li><input type="checkbox" />Giant Oyster</li>
                <li><input type="checkbox" />Effigy Incubator</li>
                <li><input type="checkbox" />Premier club vault</li>
            </ul>
        <div className="btn-position">
          <button className="finish-btn" onClick={() => {handleToggle(); refreshName();}}>{btnName ? "complete" : "refresh"}
          </button>
        </div>
        </div>
    )
}

export {DndDaily, DndWeekly, DndMonthly};