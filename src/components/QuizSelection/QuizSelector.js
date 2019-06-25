import React from 'react'
import { connect } from 'react-redux'
import { selectQuiz, startQuiz } from '../../flux/actions'

const QuizSelector = ({ selectedQuizId, quizList, selectQuiz, startQuiz }) => (
  <section>
    <h1>Välj frågesport</h1>
    {quizList.map(q => (
      <button
        onClick={e => selectQuiz(parseInt(e.target.value, 10))}
        key={q.id}
        value={q.id}
      >
        {q.label}
      </button>
    ))}
    {selectedQuizId && (
      <div>
        <button onClick={startQuiz}>Kör</button> igång{' '}
        {
          quizList.find(
            q => parseInt(q.id, 10) === parseInt(selectedQuizId, 10),
          ).label
        }
      </div>
    )}
  </section>
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
