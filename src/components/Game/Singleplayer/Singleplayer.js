import React, { useState } from 'react'
import { useQuestion } from '../gameHooks'

const Singleplayer = ({ quiz, gameOver }) => {
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const question = useQuestion(quiz.questions)
  const lockAnswer = () => {
    const updatedAnswers = [...answers, selected]
    setAnswers(updatedAnswers)
    if (question.isLast) {
      gameOver({ answers: updatedAnswers, quiz })
    } else {
      setSelected(null)
      question.next()
    }
  }

  return (
    <div>
      <h1>{quiz.label}</h1>
      <Question question={question.current} setSelected={setSelected} />
      <button disabled={selected === null} onClick={lockAnswer} type="button">
        nesta frega
      </button>
    </div>
  )
}

const Question = ({ question, setSelected }) => (
  <>
    <div>{question.id}</div>
    <div>{question.label}</div>
    {question.options.map((option, idx) => (
      <div key={option} onClick={() => setSelected(idx)}>
        {option}
      </div>
    ))}
  </>
)

export default Singleplayer
