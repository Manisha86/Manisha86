function user(){
    let raksha={name:"Raksha",surname:"Sharma",age:28};
    let srinivas={name:"Srinivas",surname:"Iyengar",age:30};
    let usha={name:"Usha",surname:"Janardhana",age:54};
    let users=[raksha,srinivas,usha];
    let usersFullnames=users.map(function(element){
        return'${element.raksha} ${element.srinivas} ${element.usha}';
    })

    users.map((a)=>{
        const capitalizedName=a.name[0].toUpperCase()+a.name.slice(1);
        return '${capitalizedName} users - ${a.raksha}*${a.srinivas}*${a.usha}';

    });
    const stringifyusers=(users)=>1;{
        return users.map((a)=>{
            const capitalizedName=a.name[0].toUpperCase()+a.name.slice(1);
            return '${capitalizedName} users-${a.raksha}*{a.srinivas}*{a.usha}';
        });
    };
console.log(users);
}