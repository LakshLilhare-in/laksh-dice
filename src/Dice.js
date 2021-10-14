import React, { Component } from "react";
import NumCon from 'words-to-numbers'

import Die from "./Die";
import "./App.css";
export default class Dice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", win:false , rolling:false, score:0};
    this.roll = this.roll.bind(this)
    this.points = NumCon(this.state.die1) + NumCon(this.state.die2) 
}
  roll() {
    const newDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
  
    const newDie2 =
      this.props.sides[Math.floor(Math.random() * 6)];
     this.setState({ die1: newDie1, die2: newDie2, rolling:true }) 
  setTimeout(() => {
      this.setState({rolling:false})
  }, 1000)
    this.setState({ score: this.state.score + NumCon(newDie1) + NumCon(newDie2) })
    if (this.state.score >= 100) {
      this.setState({win:true})
    }
    }
 
  render() {
    if (!this.state.win) {
      return (
        <>
          <h1 className="text-center pt-3">Roll Dice!</h1>
          
          <p className="lead pt-3 text-center">Score: {this.state.score}</p>
          <div className="d-flex ">
            <div className="container">
              <div className="row">
                <div className="col col-sm-2 col-md-5 ">
                  <Die className="dice-2" face={this.state.die1} rolling={this.state.rolling} />
                </div>
                <div className="col-sm-2 col-md-5">

                  <Die className="dice-1" face={this.state.die2} rolling={this.state.rolling} />
                </div>
              </div>
            
            </div>
          </div>

          <button className="mycolor text-white text-center cen" onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? 'Rolling...' : 'Roll Dices!'}
          </button>
        </>
      );
    } else {
      return (
        <div>
          <h1 className="text-center pt-3">You Win!</h1>
          <button className="mycolor text-white text-center cen" onClick={() => {
            this.setState({ win: false, score: 0 })
          }}>
            Play again
          </button>
        </div>
      )
    }
  } 
}
