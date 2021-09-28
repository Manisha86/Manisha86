let isLoading = true;

function getData(){
    return new Promise((resolve,reject) =>
    setTimeout(() => reject('Rejected!'),2500)
    );
}

function App(){
console.log('isLoading:${isLoading}');

getData()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() =>{
    isLoading = false;
    console.log('isLoading : ${isLoading}');

});
}

App();