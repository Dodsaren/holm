import React from 'react'
import PropTypes from 'prop-types'

const GameOverComponent = ({
  answers,
  justFinished,
  toMainMenu,
  toQuizSelection,
  solutions,
}) => (
  <div>
    <h1>GAME OVER</h1>
    <h2>Ditt resultat</h2>
    <h3>{justFinished.label}</h3>
    {justFinished.questions.map((q, i) => {
      const correct = solutions[i].includes(answers[i])
      const selectedAnswer = q.options[answers[i]]
      return (
        <div key={q.label}>
          <h4>{q.label}</h4>
          <h4>{selectedAnswer}</h4>
          <p>{correct ? 'Korrekt' : 'Inte korrekt'}</p>
        </div>
      )
    })}
    <ul>
      <li>
        <button onClick={toQuizSelection}>Spela igen</button>
      </li>
      <li>
        <button onClick={toMainMenu}>Spela inte igen</button>
      </li>
    </ul>
  </div>
)

GameOverComponent.propTypes = {
  answers: PropTypes.array.isRequired,
  justFinished: PropTypes.object.isRequired,
  toMainMenu: PropTypes.func.isRequired,
  toQuizSelection: PropTypes.func.isRequired,
  solutions: PropTypes.array.isRequired,
}

export default GameOverComponent
