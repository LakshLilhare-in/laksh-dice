import React, { Component } from "react";
import Die from "./Die";
import "./App.css";
export default class Dice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one" , rolling:false};
    this.roll = this.roll.bind(this)  
}
  roll() {
    const newDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
  
    const newDie2 =
      this.props.sides[Math.floor(Math.random() * 6)];
     this.setState({ die1: newDie1, die2: newDie2, rolling:true }) 
  setTimeout(() => {
      this.setState({rolling:false})
  },1000)
    }
 
  render() {
    return (
      <>
          <p className="lead pt-3 text-center">Your Current Points is:{`${this.state.die1}   ${this.state.die2}`}</p>
        <div className="d-flex ">
          <div className="container">
            <div className="row">
                <div className="col col-sm-2 col-md-5 ">
          <Die className="dice-2" face={this.state.die1} rolling={this.state.rolling}/>
                </div>
                <div className="col-sm-2 col-md-5">

          <Die className="dice-1" face={this.state.die2} rolling={this.state.rolling}/>
                </div>
            </div>
            
          </div>
        </div>

        <button className="mycolor text-white text-center cen" onClick={this.roll} disabled={this.state.rolling}>
         { this.state.rolling ? 'Rolling...' : 'Roll Dices!'}
        </button>
      </>
    );
  }
}
