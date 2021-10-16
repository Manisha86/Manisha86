import React from 'react';
import { useState } from 'react';

function App(){
const dataList = [
  {
  "id": 1,
  "name":"cerulean",
  "year":2000,
  "color":"#98B2D1",
  "pantone_value":"15-4020"
  },
  {
    "id": 2,
  "name":"fuchsia rose",
  "year":2001,
  "color":"#C74375",
  "pantone_value":"17-2031"
  },
  {
    "id": 3,
  "name":"true red",
  "year":2002,
  "color":"#BF1932",
  "pantone_value":"19-1664"
  },
  {
    "id": 4,
    "name":"auqa sky",
    "year":2003,
    "color":"#7BC4C4",
    "pantone_value":"14-4811"
  },
  {
    "id": 5,
    "name":"Tiger Lily",
    "year":2004,
    "color":"#E2583E",
    "pantone_value":"17-1456"
  },
  {
    "id": 6,
    "name":"blue torquoise",
    "year":2005,
    "color":"#53B0AE",
    "pantone_value":"15-5217"
    },
    {
      "id": 7,
      "name":"sand dollar",
      "year":2006,
      "color":"#DECDBE",
      "pantone_value":"13-1106"
    },
    {
      "id": 8,
      "name":"chilli pepper",
      "year":2007,
      "color":"#9B1830",
      "pantone_value":"19-1557"
    },
]

const [searchText, setSearchText]= useState('');
const [data ,setData] = useState(dataList);

const excludeColumns=['id','color']

const handleChange = value =>{
  setSearchText(value);
  filterData(value);
}

const filterData= value => {
  const lowerCaseValue = value.toLowerCase().trim();
  if(!lowerCaseValue){
    setData(dataList)
  }
  else{
    const filteredData=dataList.filter(item =>{
      return Object.keys(item).some(key => {
        return excludeColumns.includes(key) ? false : item[key].tostring().toLowerCase().includes(lowerCaseValue);
      })
    });
    setData(filteredData);
  }
}
 return (
 <div className = "App">
   Search :
    <input type="text" placeholder="type to search..." value={searchText} onChange={e => handleChange (e.target.value)}/>

   <div className="box-container">
      {dataList.map((d,i)=>{
        return <div className = "box" key={i} style ={{backgroundColor:d.color}}>
          <b>Name : </b>{d.name}<br/>
          <b>Year : </b>{d.year}<br/>
          <b>Color : </b>{d.color}<br/>
          <b>Pantone Value : </b>{d.pantone_value}<br/>
        </div>
      })}
      <div className="clearboth"></div>
      {data.length === 0 && <span> no records found to display </span>}
   </div>
 </div>
 );
}

export default App