import React from 'react'

export default ({
  selectedQuizId,
  handleChangeQuiz,
  handleStartGame,
  quiz,
}) => (
  <section>
    <h1>Välj frågesport</h1>
    {quiz.map(q => (
      <button onClick={handleChangeQuiz} key={q.id} value={q.id}>
        {q.label}
      </button>
    ))}
    {selectedQuizId && (
      <div>
        <button onClick={handleStartGame}>Kör</button> igång{' '}
        {
          quiz.find(q => parseInt(q.id, 10) === parseInt(selectedQuizId, 10))
            .label
        }
      </div>
    )}
  </section>
)
