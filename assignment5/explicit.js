function testFunction(value){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let n=value;
            if(n < 1000){
                resolve("cognitive");
            }
            else
            {
                reject("clouds");
            }
        }, 2000);
    })
}
testFunction(100)
 .then(function (value){
     console.log(value);
     return testFunction(50);
 })
 .then(function(value){
     console.log(value);
     return testFunction(150);
 })
 .catch(function(error){
     console.log('jihgi.${error}');
 })