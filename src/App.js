import React, { Component } from 'react'
import Scoreboard from './components/Scoreboard'
import Question from './components/Question'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {},
      score: 0,
      searchURL: 'http://jservice.io/api/random'
    }
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleIncrease = this.handleIncrease.bind(this)
    this.generateQuestion = this.generateQuestion.bind(this)
  }

  handleIncrease() {
    this.setState({score: this.state.score + 100})
  }

  handleDecrease() {
    this.setState({score: this.state.score - 100})
  }

  generateQuestion() {
    fetch(this.state.searchURL)
    .then(response => {
      return response.json()
    }).then(json => {this.setState({question: json[0]})})
  }

  render() {
    return (
      <div className="main">
        <h1>Welcome to Jeopardy!</h1>
        < Scoreboard score={this.state.score} handleDecrease={this.handleDecrease} handleIncrease={this.handleIncrease}/>
        <h2 className="gold">Let's Play!</h2>
        <button onClick={this.generateQuestion} id="gen-question">Get Question</button>
        {this.state.question.airdate ? <Question question={this.state.question}/> : ''}
      </div>
    )
  }
}
