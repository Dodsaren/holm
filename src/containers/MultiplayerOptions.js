import React, { useState } from 'react'

let secretId = 0
const MultiplayerOptions = ({ quizList }) => {
  const [playerIsBeingAdded, togglePlayerIsBeingAdded] = useState(false)
  const [playerList, setPlayerList] = useState([])
  const [currentPlayer, beingAdded] = useState('')
  const addPlayer = player => {
    currentPlayer &&
      setPlayerList([...playerList, { name: currentPlayer, id: secretId++ }])
    togglePlayerIsBeingAdded(false)
    beingAdded('')
  }
  const removePlayer = e =>
    setPlayerList(playerList.filter(p => p.id !== parseInt(e.target.value, 10)))
  return (
    <div>
      <h1>Välkommen till multiplayerspelet</h1>
      <h2>Börjar med att lägga till deltagare</h2>
      {playerList.length > 0 && (
        <ul>
          {playerList.map((p, idx) => (
            <li key={p.id}>
              {p.name}{' '}
              <button onClick={removePlayer} value={p.id}>
                ta bört
              </button>
            </li>
          ))}
        </ul>
      )}
      <div>
        {playerIsBeingAdded ? (
          <>
            <input
              onChange={e => beingAdded(e.target.value)}
              value={currentPlayer}
              type="text"
            />
            <button onClick={addPlayer}>Klar</button>
          </>
        ) : (
          <button onClick={() => togglePlayerIsBeingAdded(true)}>
            Lägg till spelare
          </button>
        )}
      </div>
    </div>
  )
}

export default MultiplayerOptions
