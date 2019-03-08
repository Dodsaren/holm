import { useState } from 'react'

export const useQuestion = questions => {
  const [index, crement] = useState(0)
  return {
    current: questions[index],
    prev: () => 0 <= index - 1 && crement(index - 1),
    next: () => questions.length > index + 1 && crement(index + 1),
    isFirst: index === 0,
    isLast: index === questions.length - 1,
  }
}
