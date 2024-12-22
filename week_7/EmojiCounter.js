import React, { useState ,useEffect} from "react";
import love from './love.png'
import sad from './sad.png'
import like from './like.png'
import happy from './happy.png'

function EmojiCounter(props) {
    console.log("pic is ",props.pic)
    const [pic, setPic] = useState(love)
    const [count, setCount] = useState(0)

    useEffect (() => {
        console.log ("function called",props.pic)
        if (props.pic == "love")
            setPic(love);
        else if (props.pic == "like")
            setPic(like);
        else if (props.pic == "sad")
            setPic(sad);
        else if (props.pic == "happy")
            setPic(happy);
    })
    const ClickHandle = () => {
        setCount (count + 1)
    }

    return (
        <div className="App">
            <p>{props.pic} <span></span>
                <button onClick={ClickHandle}>
                {count}
                <img src={pic} alt="" width="50" height="55"/>
                </button>
            </p>
        </div>
    )
}

export default EmojiCounter