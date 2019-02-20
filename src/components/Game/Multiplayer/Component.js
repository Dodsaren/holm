import React, { useState } from 'react'

const Multiplayer = ({ quiz, endGame, participants }) => {
  const [players, updateScore] = useState([
    ...participants.map(p => ({ ...p, score: 0 })),
  ])
  const [currentQuestion, nextQuestion] = useState(quiz.questions[0])
  const [askingQuestion, isAskingQuestion] = useState(false)
  return (
    <div>
      <h1>Multiplayerspel</h1>
      {askingQuestion ? (
        <Question
          question={currentQuestion}
          players={players}
          updateScore={updateScore}
          isAskingQuestion={isAskingQuestion}
        />
      ) : (
        <Scoreboard players={players} isAskingQuestion={isAskingQuestion} />
      )}
    </div>
  )
}

const Question = ({ question, players, updateScore, isAskingQuestion }) => (
  <div>
    <h3>{question.label}</h3>
    <div>Visa svar, kanske toggle: (fritextlösning)</div>
    <div>
      <h4>Dela ut poäng</h4>
      {players.map(p => (
        <button
          key={p.id}
          onClick={() => {
            updateScore([
              ...players.map(x => ({
                ...x,
                score: p.id === x.id ? x.score + 1 : x.score,
              })),
            ])
          }}
        >
          {p.name} - {p.score}
        </button>
      ))}
    </div>
    <div>
      <button onClick={() => isAskingQuestion(false)}>Till poängtavlan</button>
    </div>
  </div>
)

const Scoreboard = ({ players, isAskingQuestion }) => (
  <div>
    <h2>Deltagare</h2>
    {players.map(p => (
      <div key={p.name}>
        {p.name} - {p.score}
      </div>
    ))}
    <button onClick={() => isAskingQuestion(true)}>Neeste freegee</button>
  </div>
)
export default Multiplayer
