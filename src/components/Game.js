import React, { Component } from 'react'

const Quiz = ({ quiz, question, selected, select, increment }) => (
  <div>
    <h1>{quiz.label}</h1>
    <div>{question.id}</div>
    <div>{question.label}</div>
    {question.options.map((option, idx) => (
      <div onClick={() => select(idx)}>{option}</div>
    ))}
    <button disabled={selected === null} onClick={increment} type="button">
      nesta frega
    </button>
  </div>
)

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: 0,
      collectedAnswers: [],
      selected: null,
    }

    this.maxIndex = props.quiz.questions.length - 1

    this.increment = this.increment.bind(this)
    this.select = this.select.bind(this)
  }

  increment() {
    const nextIndex = this.state.questionIndex + 1
    const answers = [...this.state.collectedAnswers, this.state.selected]
    if (nextIndex > this.maxIndex) {
      this.props.endGame({ answers, quiz: this.props.quiz })
    } else {
      this.setState({
        questionIndex: nextIndex,
        selected: null,
        collectedAnswers: answers,
      })
    }
  }

  select(idx) {
    this.setState({ selected: idx })
  }

  render() {
    const selected = this.state.selected
    const question = this.props.quiz.questions[this.state.questionIndex]
    return (
      <Quiz
        quiz={this.props.quiz}
        question={question}
        select={this.select}
        increment={this.increment}
        selected={selected}
      />
    )
  }
}

export default Game
