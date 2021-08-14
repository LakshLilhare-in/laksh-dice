import React, { Component } from 'react'
import Dices from './Dice'
import Die from './Die'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center pt-3">Roll Die!</h1>
        <Dices />
      </div>
    )
  }
}
