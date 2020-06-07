import React from "react";
import "./First.css";

class First extends React.Component {
// объекты и их методы
state={
  salary:2500,
  rent:0,
  food:0,
  entertaments:0,
  bar:0,
  car:0,
  result:0,
}



render(){
  return (
    <div>
      {/* вёрстка */}
    <div className="card">Salary: 
    <input value={this.state.salary} onChange={(event)=> {
      this.setState({
        salary: (event.target.value),
      })
    }} />
    </div>

    <div className="rent">Rent: 
    <input value={this.state.rent} onChange={(event)=> {
      this.setState({
        rent: (event.target.value),
      })
    }} />
    <input value={this.state.rent/this.state.salary*100} /> %
    </div>

    <div className="food">Food: 
    <input value={this.state.food} onChange={(event)=> {
      this.setState({
        food: (event.target.value),
      })
    }} />
    <input value={this.state.food/this.state.salary*100} /> %
    </div>

    <div className="entertaments">Entertaments: 
    <input value={this.state.entertaments} onChange={(event)=> {
      this.setState({
        entertaments: (event.target.value),
      })
    }} />
    <input value={this.state.entertaments/this.state.salary*100} /> %
    </div>

    <div className="bar">Bar: 
    <input value={this.state.bar} onChange={(event)=> {
      this.setState({
        bar: (event.target.value),
      })
    }} />
    <input value={this.state.bar/this.state.salary*100} /> %
    </div>

    <div className="car">Car: 
    <input value={this.state.car} onChange={(event)=> {
      this.setState({
        car: (event.target.value),
      })
    }} />
    <input value={this.state.car/this.state.salary*100} /> %
    </div>

    {/* <div className="result">
      <button onClick={()=>{
        if (result<{this.state.salary}) {
          return "You are alive!"
        } else {
          return "You do not have enough money"
        }
      }}>Do you spender?</button>
    
      
    </div> */}

    <div className="balance">
      <p>Balans:</p>
      {+(this.state.salary) - (+(this.state.rent) + +(this.state.food) + +(this.state.entertaments) + 
      +(this.state.bar) + +(this.state.car))}
    </div>
    
    <div className="alert">
      <button className="button" onClick={()=>{
        if ((+(this.state.salary) - (+(this.state.rent) + +(this.state.food) + +(this.state.entertaments) + 
          +(this.state.bar) + +(this.state.car)))<0) {
          alert("It's sucks!")
        } else {
          alert("I'm a Superman!")
        }
      }}>Are you a spender?</button>
      
    </div>
    
    
    
    </div>
    



  

    
  )
}
}



export default First