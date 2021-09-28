function getStudent(){
    return new Promise(function(resolve ,reject){
     setTimeout(() =>{
         reject("something went wrong");
     },500);
    });
}

getStudent().then(success,failure);

function success(){
    console.log("success");

}

function failure(errormessage){
    console.log(errormessage);
}
