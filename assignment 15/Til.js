import React, {useState } from 'react';
import './App.css';
import OtherComponent from './OtherFile.js';

function HelloWorld() {
    return <div> Hello World ..!! </div>
}

function Button(){
    const [thing , setThing] = useState();
    return <button 
      style = {{ color : thing ? "blue" : "green"}}
      onClick ={() => {
        setThing(!thing);
     }}
    >
      {""}
      Do Something{""}
    </button>
}

export default function Til(){
    
    return (
        <div className="App">
            <h1> Hello CodeSandBox </h1>
            <h2> Start editing to see your magic happen..!!</h2>
            <HelloWorld/>
            <OtherComponent/>
            <Button/>
        </div>
            
    )
}