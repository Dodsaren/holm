import React, { useState, useEffect } from 'react'
import style from './component.module.css'
import QuizSelector from '../QuizSelector'

let secretId = 0
const Multiplayer = ({
  quizList,
  participants,
  participantAdded,
  participantRemoved,
}) => {
  const addPlayerInputRef = React.createRef()
  const [playerIsBeingAdded, adding] = useState(false)
  const [currentPlayer, beingAdded] = useState('')

  useEffect(() => {
    playerIsBeingAdded && addPlayerInputRef.current.focus()
  })

  const addPlayer = () => {
    currentPlayer
      ? participantAdded({ name: currentPlayer, id: secretId++ })
      : adding(false)
    beingAdded('')
  }

  return (
    <div>
      <h1>Välkommen till pathfinder</h1>
      <h2>Börjar med att lägga till deltagare</h2>
      <div className={style.playerList}>
        {participants.length > 0 && (
          <>
            <h3>Players</h3>
            <ul>
              {participants.map((p, idx) => (
                <li className={style.playerListItem} key={p.id}>
                  {p.name}{' '}
                  <button onClick={() => participantRemoved(p.id)} value={p.id}>
                    ta bört
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        {playerIsBeingAdded ? (
          <>
            <input
              ref={addPlayerInputRef}
              onChange={e => beingAdded(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && addPlayer()}
              value={currentPlayer}
              type="text"
            />
            <button onClick={addPlayer}>Klar</button>
          </>
        ) : (
          <button onClick={() => adding(true)}>Lägg till spelare</button>
        )}
      </div>
      {participants.length > 1 && <QuizSelector quizList={quizList} />}
    </div>
  )
}

export default Multiplayer
