import React, {Child , car , data } from 'react';
 
class Car extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           data : 'Toyota'
       }
   }
   render(){
       const {data} = this.state;
       return (
           <div>
              <Child Carengine={car.engine} gearBox={car.gearBox} type={car.type} spareWheel={car.spareWheel} seatingCapacity={car.seatingCapacity} bhp={car.bhp} torque={car.torque} />
           </div>
       )
   }
}
class Carengine extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data : this.props.Carengine
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div>
                {data}
            </div>
        )
    }
}

export default Car;