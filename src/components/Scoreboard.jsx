import React, { Component } from 'react'

export default class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <h2 className="gold">Score: <span className="question-span">{this.props.score}</span></h2>
                <button id="increase" onClick={this.props.handleIncrease}>Increase</button>
                <button id="decrease" onClick={this.props.handleDecrease}>Decrease</button>
            </div>
        )
    }
}