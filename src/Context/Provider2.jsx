import React, { useState } from "react";
import Context2 from "./creator2";

export default function Provider2({children}){
    const [data2, setData2] = useState({
        breakTime : 1,
    })
  return(
    <>
      <Context2.Provider value={{data2,setData2}}>
        {children}
      </Context2.Provider>
    </>
  )
}