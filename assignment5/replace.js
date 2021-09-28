const fs = require ('fs');
function fe({readFile}) 
function setTimeout();

function setTimeout() {(()=>{
    console.log('3');
    setTimeout(()=>{
        console.log('2');
        setTimeout(() =>{
            console.log(1);
            console.log("waited 3 second");
        }, 3000);
    }, 3000);
} , 3000
)}


fs.readFile('./test.txt', {encoding:'utf-8'},(err, data)=>{
    if(err){
        console.error('error');
        console.error(err);
    }   
    else{
    console.error('got data');
    console.log(data);
    }
});

const myPromise =new Promise((res, rej) =>{
    const rand = Math.floor(Math.random()*2);
    if(rand == 0){
    resolve();
    }
    else{
        reject();
    }
    setTimeout(()=> res("resolved!"),3000)
    });

myPromise
.then((res) => alert("response value is:" +res))
.catch(() => console.error('something went wrong'));

fe.myPromise
.readFile('./test2.txt',{ encoding: 'utf-8' })
.then((data) => console.log(data))
.catch((err) => console.error(err));

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.error(err));

const loadFile = async () => {
    try{
    const data = await fs.promises.readFile('./test.txt',{
        encoding:'utf-8',
    });
    console.log(data);
}
catch(error){
    console.error(error);
}
};
loadFile();

const fetchPokemon =async(id) => {
    try{
const res =await fetch('https://pokeapi.co/api/v2/pokemon/${id}');
const data = await res.json();
console.log(data);
}
catch(err){
    console.error(err);
}
};

fetchPokemon()