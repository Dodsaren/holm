import React, { useState } from 'react'

const useQuestion = questions => {
  const [index, crement] = useState(0)
  return {
    current: questions[index],
    prev: () => 0 <= index - 1 && crement(index - 1),
    next: () => questions.length > index + 1 && crement(index + 1),
  }
}

const useScoreboard = participants => {
  const [players, setScore] = useState([
    ...participants.map(p => ({ ...p, score: 0 })),
  ])

  return {
    players,
    add(points = 1, playerId) {
      setScore([
        ...players.map(x => ({
          ...x,
          score: playerId === x.id ? x.score + points : x.score,
        })),
      ])
    },
  }
}

const Multiplayer = ({ quiz, endGame, participants }) => {
  const question = useQuestion(quiz.questions)
  const scoreboard = useScoreboard(participants)
  const [askingQuestion, isAskingQuestion] = useState(false)
  return (
    <div>
      <h1>Multiplayerspel</h1>
      {askingQuestion ? (
        <Question
          question={question.current}
          scoreboard={scoreboard}
          isAskingQuestion={isAskingQuestion}
        />
      ) : (
        <Scoreboard
          scoreboard={scoreboard}
          isAskingQuestion={isAskingQuestion}
        />
      )}
      <button onClick={question.prev}>Backa bror</button>
      <button onClick={question.next}>Neeste freege</button>
    </div>
  )
}

const useToggle = value => {
  const [bool, toggle] = useState(value)
  return [bool, () => toggle(!bool)]
}

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

const Scoreboard = ({ scoreboard, isAskingQuestion }) => (
  <div>
    <h2>Deltagare</h2>
    {scoreboard.players.map(p => (
      <div key={p.name}>
        {p.name} - {p.score}
      </div>
    ))}
    <button
      onClick={() => {
        isAskingQuestion(true)
      }}
    >
      Till frågan
    </button>
  </div>
)
export default Multiplayer
