const sureThing = promise =>
promise
  .then(result =>({ok:true, result}))
  .catch(error => Promise.resolve({ok:false, error}));

const log = console.log;

const maybeCow = cow =>
new Promise((success,failure)=>
cow === 'cow' ? success('it is a cow')
: failure(new Error('it is not a cow , it is : ${cow}')));

const go = async() => 
{
const {ok, error ,result} = await sureThing(maybeCow('cow'));
log("ok:",ok);
log("error:",error);
log("result:",result);
if(ok){
    //use your data
}else{
    console.log("error:",error);
    return {ok,error};
}
};
go();

const MaybeCow = cow => {
    if(cow === 'cow'){
        return{ok: true, data:true };
    }else {
        return{ok:false, error:new Error('cow is not a cow:${0}')}
    }
};

const result = MaybeCow('asmsldppk');
log("result:",result);

const p = maybeCow('cow');
log("p:",p);