import {
  GAME_INITIALIZED,
  QUIZ_SELECTED,
  GAME_STARTED,
  TO_MAIN_MENU,
  END_GAME,
  MODE_SELECTED,
  MODE_SELECTION_CONFIRMED,
  PARTICIPANT_ADDED,
  PARTICIPANT_REMOVED,
} from './actionTypes'

export function toMainMenu() {
  return { type: TO_MAIN_MENU }
}

export function initGame() {
  return { type: GAME_INITIALIZED }
}

export function selectQuiz(id) {
  return { type: QUIZ_SELECTED, payload: parseInt(id, 10) }
}

export function startQuiz() {
  return { type: GAME_STARTED }
}

export function endGame(payload) {
  return { type: END_GAME, payload }
}

export function modeSelected(payload) {
  return { type: MODE_SELECTED, payload }
}

export function modeConfirmed() {
  return { type: MODE_SELECTION_CONFIRMED }
}

export function participantAdded(participant) {
  return { type: PARTICIPANT_ADDED, payload: { participant } }
}

export function participantRemoved(id) {
  return { type: PARTICIPANT_REMOVED, payload: { id } }
}
