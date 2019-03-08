import React from 'react'
import { useToggle } from './multiplayerHooks'

const Question = ({ question, scoreboard, isAskingQuestion }) => {
  const [showAnswer, toggle] = useToggle(false)
  return (
    <div>
      <h3>{question.label}</h3>
      <div onClick={toggle} role="button">
        {showAnswer ? (
          <h4>{question.freetextSolutions[0]}</h4>
        ) : (
          <h4>Visa svar</h4>
        )}
      </div>
      <div>
        <h4>Dela ut poäng</h4>
        {scoreboard.players.map(p => (
          <div key={p.id}>
            <div>
              <button onClick={() => scoreboard.add(1, p.id)}>+</button>
            </div>
            <div>
              {p.name} - {p.score}
            </div>
            <div>
              <button onClick={() => scoreboard.add(-1, p.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => isAskingQuestion(false)}>
          Till poängtavlan
        </button>
      </div>
    </div>
  )
}

export default Question
