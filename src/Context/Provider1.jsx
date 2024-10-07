import React, { useState } from "react";
import Context1 from "./creator1";

export default function Provider1({children}){
    const [data1, setData1] = useState({
        sessionTime : 1,
    })
  return(
    <>
      <Context1.Provider value={{data1,setData1}}>
        {children}
      </Context1.Provider>
    </>
  )
}