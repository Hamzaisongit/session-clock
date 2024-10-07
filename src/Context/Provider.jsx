import React, { useState } from "react";
import Context from "./creator";
import Context1 from "./creator1";
import Provider1 from "./Provider1";
import Provider2 from "./Provider2";

export default function Provider({children}){
    const [data, setData] = useState({
        currentMode : 'session',
        ticking : 'yettobedone..'
    })
  return(
    <>
      <Context.Provider value={{data,setData}}>
      <Provider1>
        <Provider2>
        {children}
        </Provider2>
      </Provider1> 
      </Context.Provider>
    </>
  )
}