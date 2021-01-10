import React, { Component } from 'react'

export default class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seeQuestion: false
        }
        this.toggleQuestion = this.toggleQuestion.bind(this)
    }

    toggleQuestion() {
        this.setState({seeQuestion: !this.state.seeQuestion})
    }

    render() {
        return (
            <div className="question">
                <h3 className="gold">Category: <span className="question-span">{this.props.question.category.title}</span></h3>
                <h3 className="gold">Answer: <span className="question-span">{this.props.question.question}</span></h3>
                <h4 className="gold">Points: <span className="question-span">{this.props.question.value}</span></h4>
                <button id="answer-button" onClick={this.toggleQuestion}>Click to Reveal Question</button>
                {this.state.seeQuestion ? <h3 className="gold">Question: <span className="question-span">{this.props.question.answer}</span></h3> : ''}
            </div>
        )
    }
}