import { useState } from 'react'

export const useScoreboard = participants => {
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

export const useToggle = value => {
  const [bool, toggle] = useState(value)
  return [bool, () => toggle(!bool)]
}
