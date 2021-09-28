function showLoadingScreen(){
    console.log("1.loading screen appeared")
}

function hideLoadingScreen(){
    console.log("4.loading screen hidden");
}

function getDataFromAPI(callback){
    console.log("2 start pulling data")
    setTimeout(() => {
        console.log("3.finished pulling data");
        callback();
    }, 3000);
}

showLoadingScreen();
getDataFromAPI(hideLoadingScreen);

