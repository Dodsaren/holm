import {
  START_GAME,
  SELECT_QUIZ,
  START_QUIZ,
  TO_MAIN_MENU,
  END_GAME,
} from './actionTypes'

export function toMainMenu() {
  return { type: TO_MAIN_MENU }
}

export function startGame() {
  return { type: START_GAME }
}

export function selectQuiz(id) {
  return { type: SELECT_QUIZ, payload: parseInt(id, 10) }
}

export function startQuiz() {
  return { type: START_QUIZ }
}

export function endGame(payload) {
  return { type: END_GAME, payload }
}
