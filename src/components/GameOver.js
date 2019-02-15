import React from 'react'
import { connect } from 'react-redux'
import { toMainMenu, startGame } from '../flux/actions'

const GameOver = ({
  answers,
  justFinished,
  toMainMenu,
  toQuizSelection,
  solutions,
}) => {
  return (
    <div>
      <h1>GAME OVER</h1>
      <h2>Ditt resultat</h2>
      <h3>{justFinished.label}</h3>
      {justFinished.questions.map((q, i) => {
        const correct = solutions[i].includes(answers[i])
        const selectedAnswer = q.options[answers[i]]
        return (
          <div>
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
}

const mapStateToProps = ({ justFinished, answers }) => ({
  justFinished,
  answers,
})

const mapDispatchToProps = {
  toMainMenu,
  toQuizSelection: startGame,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameOver)
