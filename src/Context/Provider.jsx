import React, { useState } from "react";
import Context from "./creator";

export default function Provider({children}){
    const [data, setData] = useState({
        sessionTime : 1,
        breakTime : 1,
        currentMode : 'session',
        ticking : 'yettobedone..'
    })
  return(
    <>
      <Context.Provider value={{data,setData}}>
        {children}
      </Context.Provider>
    </>
  )
}