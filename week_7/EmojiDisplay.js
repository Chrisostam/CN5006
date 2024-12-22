import React from "react";
import { useState ,useEffect} from 'react';
import "./App.css";
import love from './love.png'
import sad from './sad.png'
import like from './like.png'
import happy from './happy.png'
import p404 from './p404.png'

function EmojiDisplay(){
    
    const [pic, setPic] = useState(love)

    function display(){
        const name$ = document.getElementById('name').value;
        if (name$ === "love")
            setPic(love);
        else if (name$ === "like")
            setPic(like);
        else if (name$ === "sad")
            setPic(sad);
        else if (name$ === "happy")
            setPic(happy);
        else
            setPic(p404);
    }

    return(
        <div className="dis">
            <input className="name" type= "string" id="name" placeholder="love"/>
            <button id = "clac" onClick={display} >
                    find
                </button>
            <img src={pic} alt="" width="50" height="50"/>
        </div>
    )
}

export default EmojiDisplay