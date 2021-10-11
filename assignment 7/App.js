import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      check1:false,
      check2:false,
      radio1:"yes"
    }
    
    this.onCheckChange=this.onCheckChange.bind(this)
    this.onRadioChange=this.onRadioChange.bind(this)
  }
  onCheckChange(e){
    console.log(e.target.checked);
    this.setState({
      [e.target.name]:e.target.checked
    })
  }
  onRadioChange(e){
    console.log(e.target.value);
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return(
    <div>
      <input type="checkbox" name="check1" checked={this.state.check1} onChange={this.onCheckChange}/> Phone number<br/> 
      <input type="checkbox" name="check2" checked={this.state.check2} onChange={this.onCheckChange}/> Has data <br/> 
      <input type="radio" name="radio1" value="yes" checked={this.state.radio1==="yes"} onChange={this.onCheckChange}/> Yes <br/> 
      <input type="radio" name="radio1" value="no" checked={this.state.radio1==="no"} onChange={this.onCheckChange}/> No <br/> 
      Phone Number:{this.state.check1.toString()}<br/>
      Has data:{this.state.check2.toString()}<br/>
      Radio:{this.state.radio1}<br/>
      </div>
    );
  }
}

export default App;