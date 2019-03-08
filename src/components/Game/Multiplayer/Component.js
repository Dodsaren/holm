import React, { useState } from 'react'
import { useScoreboard } from './multiplayerHooks'
import { useQuestion } from '../gameHooks'
import Question from './Question'
import Scoreboard from './Scoreboard'

const Multiplayer = ({ quiz, gameOver, participants }) => {
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
          players={scoreboard.players}
          isAskingQuestion={isAskingQuestion}
        />
      )}

      {!question.isFirst && <button onClick={question.prev}>Backa bror</button>}
      {!question.isLast ? (
        <button onClick={question.next}>Neeste freege</button>
      ) : (
        <button onClick={() => gameOver({ players: scoreboard.players, quiz })}>
          Avsluta spelet
        </button>
      )}
    </div>
  )
}

export default Multiplayer
