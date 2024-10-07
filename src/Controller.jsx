import React, { useContext, useState } from "react";
import Context from "./Context/creator";

export default function Controller({type}){
    const {data, setData} = useContext(Context)
    return type=="session"?(
        <div>
            <span>{data.sessionTime}</span>
            <button onClick={()=>{setData((p)=>{
               return {
                ...p,
                sessionTime : p.sessionTime<60? ++p.sessionTime : 60
               }
            })}}>+</button>
            <button onClick={()=>{setData((p)=>{
               return {
                ...p,
                sessionTime : p.sessionTime>0? --p.sessionTime : 0 
               }
            })}}>-</button>
        </div>
    ) : (<div>
            <span>{data.breakTime}</span>
            <button onClick={()=>{setData((p)=>{
               return {
                ...p,
                breakTime : p.breakTime<60? ++p.breakTime : 60
               }
            })}}>+</button>
            <button onClick={()=>{setData((p)=>{
               return {
                ...p,
                breakTime : p.breakTime>0? --p.breakTime : 0
               }
            })}}>-</button>
        </div>)
}