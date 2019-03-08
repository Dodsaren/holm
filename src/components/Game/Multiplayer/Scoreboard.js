import React from 'react'

const Scoreboard = ({ players, isAskingQuestion }) => (
  <div>
    <h2>Deltagare</h2>
    {players.map(p => (
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

export default Scoreboard
