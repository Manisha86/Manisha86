import React, { useState ,useEffect, useRef } from 'react';

export default function Ref(){
    const [name,setName] = useState('')
    const prevName =useRef()
    useEffect(()=>{
        prevName.current =name
    },[name])
    
    return(
        <>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <div> My Name is {name} and it used to be {prevName.current}</div>
        </>
    );
}