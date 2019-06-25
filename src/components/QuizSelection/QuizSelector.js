import React from 'react'
import { connect } from 'react-redux'
import { selectQuiz, startQuiz } from '../../flux/actions'

const QuizSelector = ({ selectedQuizId, quizList, selectQuiz, startQuiz }) => {
  console.log(selectedQuizId)
  const quiz = selectedQuizId
    ? quizList.find(q => parseInt(q.id, 10) === parseInt(selectedQuizId, 10))
    : null

  return (
    <section>
      <h1>Välj frågesport</h1>
      <QuizList data={quizList} selectQuiz={selectQuiz} />
      {quiz && <SelectedQuiz quiz={quiz} startQuiz={startQuiz} />}
    </section>
  )
}

const QuizList = ({ data, selectQuiz }) => (
  <div>
    {data.map(q => (
      <button
        onClick={e => selectQuiz(parseInt(e.target.value, 10))}
        key={q.id}
        value={q.id}
      >
        {q.label}
      </button>
    ))}
  </div>
)

const SelectedQuiz = ({ quiz, startQuiz }) => (
  <button onClick={startQuiz}>Kör igång {quiz.label}</button>
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
