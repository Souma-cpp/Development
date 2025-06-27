import { useState } from "react"

export default function Time(){
    setInterval(updateTime , 1000) ;
    const [time , setTime] = useState(null) ;
    function updateTime(){
        const temp = new Date().toLocaleTimeString();    
        setTime(temp) ;
    }
    return (
        <div className="app-container">
            <h1>Check the time right now :</h1>
            <h3>{time}</h3>
            <button onClick={updateTime}>Get time</button>
        </div>
    )
}