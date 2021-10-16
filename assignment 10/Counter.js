import React , {useState} from  'react';

const Counter = () => {
    const [count,setCount] = useState(0);

    const [values,setValues] = useState({first : "" ,last:""});

    const add = () =>{
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    const subtract = () =>{
        setCount(prev => prev  - 1)
        setCount(prev => prev  - 1)
    }
   
    const updateValues= (newVal) => {
        
        setValues({...values,last:"Gray"});
        setValues(prev => ({...prev,last:"Gray"}));
        
    }

    return(
        <section>
            <h1>
                {count}
            </h1>
            <div class="row">
                <button onClick={add }>+</button>
                <button onClick={ subtract}>-</button>
            </div>
            <div class="row">
              <button onClick={() => setCount(0)}>Reset</button>

            </div>
        </section>
    );
}

export default Counter