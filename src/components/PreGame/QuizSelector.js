import React from 'react'
import { connect } from 'react-redux'
import { selectQuiz, startQuiz } from '../../flux/actions'
import GameMenu from './GameMenu'

const QuizSelector = ({ selectedQuizId, quizList, selectQuiz, startQuiz }) => (
  <GameMenu
    handleChangeQuiz={e => selectQuiz(parseInt(e.target.value, 10))}
    handleStartGame={startQuiz}
    quiz={quizList}
    selectedQuizId={selectedQuizId}
  />
)

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
