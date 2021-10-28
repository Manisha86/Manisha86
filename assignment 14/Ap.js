import React, {useState , useEffect } from 'react';
import axios from 'axios';
import Todo from 'Todo';
import Title from 'Title';

const endpoint = 'https://jsonbox.io/box_d882de5718e919abf530';
 
const Ap = () => {
    const [inputValue , setInputValue] = useState("");
    const [todos, setTodos] = useState();

    const handleSubmit = async () => {
        if (inputValue === "") return;
        const newTodo = {text:inputValue};
        const { status } = await axios.post(endpoint + "/todos",newTodo)
        if(status===200){
            fetchTodos();
            setInputValue("");
        }
    };

    const handleDeleteTodo = async id => {
       const {status} = await axios.delete(endpoint+"/todos/${id}")
       if (status === 200){
         fetchTodos()
       }
    };

    const fetchTodos = async () => {
        const {data ,status} = await axios.get(endpoint+ "/todos?sort=_createdOn")
        if(status === 200) {
          setTodos(data)
        }
    };

    useEffect(() =>{
      fetchTodos();
    },[])

    return (
        <div className ="App">
            <div className = "todoList">
                <title myName="nico"/>
                <form
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSubmit={handleSubmit}
                />
                {todos.map((todo,index)=>(
                    <Todo
                    todo={todo}
                    index={index}
                    handleDeleteTodo={handleDeleteTodo}
                    key={todo._id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Ap;