import React from 'react'
import List from "./List"
import { FaTrashAlt } from 'react-icons/fa'
import './List.css';

function List({ title = 'FCV lIST' , items =['No Items'], onItemClick=(item)=>{
    console.log(item)},onItemDelete=(item, index)=>{console.log('deleted' +item)}, canDelete}){
    return (<>
        <div className= "List">
        <div className= "title">
           <h2> {title}</h2>
        </div>
        {
            items.map((item,index) =>
            <div key={index} className ="content">
             <div className= "text" onClick={() =>{onItemClick(item)}}>
                 <p>{item}</p>
                 </div>
                 {canDelete &&
             <div className="delete" onClick={() =>{onItemDelete(item,index)}}>
                 < FaTrashAlt/>
             </div>
        }
            </div>    
        )}
        </div>
        </>
    )
    }

export default {List ,canDelete}