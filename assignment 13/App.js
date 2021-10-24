import React ,{useState , useReducer , useEffect , useRef, useLayoutEffect} from 'react';
import axios from 'axios';

const App = () => {
  const[counter,setCounter]=useState(0);

  const increment= () =>{
    setCounter(counter +1);
  };

  const [inputValue, setInputValue] = useState("pedro")

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const reducer = (state,action) =>{
    switch(action.type){
      case "INCREMENT":
       return {count: state.count+1, showText:state.showText }
      case "toggleShowText":
       return {count: state.count, showText:!state.showText}
      default:
        return state
    }
  }

  const [state , dispatch] =  useReducer(reducer, {count :0 , showText:true});

  const [data , setData] = useState("");

  const [count,setCount]= useState(0);

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED")
      });
  },[]);

  const inputRef = useRef(null);

  const onClick = () =>{
    inputRef.current.value="";
  } ;

  const divRef=useRef(null);
  
  useLayoutEffect(() => {
    console.log(divRef.current.value);
  },[]);

  useEffect(()=>{
    divRef.current.value="HELLO";
  },[])

  return (
  <div> 
    {counter}
    <button onClick={increment}> Increment </button>
    <div>
      <input placeholder="enter something..." onChange={onChange}/>
       {inputValue}
   </div>
   <div>
     <h1> {state.count} </h1>
     <button onClick = { () =>{
      dispatch({type: "INCREMENT"});
      dispatch({type: "toggleShowText"})
     }}
     >
       click here
     </button>
     {state.showText && <p> this is a text </p>}
   </div>
   <div> 
     Hello World 
     <h1>{data}</h1>
     <h1>{count}</h1>
     <button 
      onClick={() => {
        setCount(count+1);
      }}
      >
        click
      </button>
   </div>
   <div>
     <h1> Pedro </h1>
     <input type = "text" placeholder="Ex..." ref={inputRef}/>
     <button onClick={onClick}> Change Name </button>
   </div>
   <div className="App">
     <input ref = {divRef} value = "PEDRO" style={{width:400, height:100}}/>
   </div>
  </div>
  );
};

export default App;
