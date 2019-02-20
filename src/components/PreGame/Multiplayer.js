import React, { useState, useEffect } from 'react'
import style from './multiplayer.module.css'
import QuizSelector from './QuizSelector'

let secretId = 0
const Multiplayer = ({ quizList }) => {
  let addPlayerInputRef = React.createRef()

  const [playerIsBeingAdded, togglePlayerIsBeingAdded] = useState(false)
  const [playerList, setPlayerList] = useState([])
  const [currentPlayer, beingAdded] = useState('')

  useEffect(() => {
    playerIsBeingAdded && addPlayerInputRef.current.focus()
  })

  const startAddPlayer = () => {
    togglePlayerIsBeingAdded(true)
  }

  const addPlayer = () => {
    currentPlayer
      ? setPlayerList([...playerList, { name: currentPlayer, id: secretId++ }])
      : togglePlayerIsBeingAdded(false)
    beingAdded('')
  }

  const removePlayer = e =>
    setPlayerList(playerList.filter(p => p.id !== parseInt(e.target.value, 10)))

  return (
    <div>
      <h1>Välkommen till pathfinder</h1>
      <h2>Börjar med att lägga till deltagare</h2>
      <div className={style.playerList}>
        {playerList.length > 0 && (
          <>
            <h3>Players</h3>
            <ul>
              {playerList.map((p, idx) => (
                <li className={style.playerListItem} key={p.id}>
                  {p.name}{' '}
                  <button onClick={removePlayer} value={p.id}>
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
          <button onClick={startAddPlayer}>Lägg till spelare</button>
        )}
      </div>
      {playerList.length > 1 && <QuizSelector quizList={quizList} />}
    </div>
  )
}

export default Multiplayer
