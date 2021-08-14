import React, { Component } from 'react'
import './App.css'
export default class Die extends Component {
    render() {
        return (
            <div>
                <i  className={`p-3 dice fa fa-dice-${this.props.face} fa-10x ${this.props.rolling && 'shaked'}`}></i>
            </div>
        )
    }
}
