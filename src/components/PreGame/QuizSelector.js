import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectQuiz, startQuiz } from '../../flux/actions'
import GameMenu from './GameMenu'

class QuizSelector extends Component {
  constructor(props) {
    super(props)
    this.handleChangeQuiz = this.handleChangeQuiz.bind(this)
    this.handleStartGame = this.handleStartGame.bind(this)
  }

  handleStartGame() {
    if (!this.props.selectedQuizId) return alert('Du måste välja quiz först!')
    this.props.startQuiz()
  }

  handleChangeQuiz(e) {
    const id = parseInt(e.target.value, 10)
    this.props.selectQuiz(id)
  }

  render() {
    const { selectedQuizId } = this.props
    return (
      <GameMenu
        handleChangeQuiz={this.handleChangeQuiz}
        handleStartGame={this.handleStartGame}
        quiz={this.props.quizList}
        selectedQuizId={selectedQuizId}
      />
    )
  }
}

const mapStateToProps = ({ selectedQuizId }) => ({
  selectedQuizId,
})

const mapDispatchToProps = {
  selectQuiz,
  startQuiz,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizSelector)
