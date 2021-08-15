import React, { Component } from "react";
import Dices from "./Dice";

export default class App extends Component {
  render() {
    return (
      
        <div>
          <h1 className="text-center pt-3">Roll Dice!</h1>
          <Dices />
        </div>
        
     
    );
  }
}
