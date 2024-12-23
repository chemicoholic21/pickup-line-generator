import React, { useState } from 'react'
import './RandomLine.css'
import twitter_icon from '../Assets/twitter-x.svg'
import reload_icon from '../Assets/refresh.svg'

const RandomLine = () => {
  const [randomLine, setRandomLine] = useState({
    text: "Did you just fart?",
    answer: "No, I just blew you a kiss with my butt.",
  });

  return (
    <div className='container'>
        <div className="randomLine">{randomLine.text}</div>
    <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">{randomLine.author}
            </div>
            <div className="icons">
                <img src= {reload_icon} alt="refresh-icon" />
                <img src={twitter_icon} alt="twitter-icon" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default RandomLine
