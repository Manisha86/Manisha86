import React, { useRef, useReducer ,useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react/cjs/react.development';

function Ap(){ 

    const[count,setCount] = useState(0)
    
    useEffect(() =>{
    const  interval =setInterval(() => setCount(0),5000);
    return () => clearInterval(interval);
    } ,[count])

    const [notes , dispatch]= useReducer((state,action) => {
      switch(action.type){
          case "add" : {
           return[
               ...state,
               {
                   id:nanoid(),
                   name:action.name
               }
           ]
          }
          case "remove":{
           return state
          }
          default:
              return state.filter(note => note.id !== action.id )
      }
    }, [])

    const inputRef = useRef();

    const addNote =() =>{
        dispatch({
            type : "add",
            name : inputRef.current.value
        })
        inputRef.current.value="";
    };
      
    return(
        <>
        <div>
          <p>
             Count:{count}
          </p>
           <button onClick={() => setCount(count + 1)}> Increment </button>
           <button onClick={() => setCount(count - 1)}> Decrement </button>
        </div>
        <div>
            <input ref ={inputRef} />
            <button onClick ={addNote}> Add Note </button>
        </div>
        <ul>
            {notes.map((note,index)=>(
                <li key ={note.id}>
                    {note.name}
                    <button onClick= {() => dispatch({ type : "remove" , id: note.id})}>
                        x
                    </button>
                </li>
            ))}
        </ul>
        </>
    );
}

export default Ap;