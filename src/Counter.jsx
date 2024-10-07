import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import Context from "./Context/creator";

export default function Counter(){

const {data, setData} = useContext(Context)

const [reset, setReset] = useState(false)
useEffect(()=>{
    
},[reset])

const render = ({seconds, minutes, completed,api})=>{
    return (
        <div>
 <span>{minutes}:{seconds}</span>
<button onClick={api.start}>start</button>
 <button onClick={()=>{
    console.log(completed)
    api.pause()
 }}>pause</button>

        </div>
   
)
}

    return(
        <>
<h3>{data.currentMode}</h3>
<Countdown date={data.currentMode=="session"? Date.now() + 60000*data.sessionTime : Date.now() + 60000*data.breakTime } renderer={render} controlled={false} onComplete={()=>{
    setData((p)=>{
        return {
            ...p,
            currentMode : p.currentMode=="session"?"break":"session" 
        }
    })
}}></Countdown>
<button onClick={()=>setReset(!reset)}>reset</button>
        </>
    )
}