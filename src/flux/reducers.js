import {
  GAME_INITIALIZED,
  QUIZ_SELECTED,
  MODE_SELECTED,
  MODE_SELECTION_CONFIRMED,
  GAME_STARTED,
  TO_MAIN_MENU,
  END_GAME,
} from './actionTypes'
import {
  MAIN_MENU,
  QUIZ_SELECTION,
  MODE_SELECTION,
  IN_GAME,
  GAME_OVER,
} from '../flux/gameStates'

const initialState = {
  gameState: MAIN_MENU,
  selectedQuizId: null,
  answers: [],
  justFinished: null,
  mode: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GAME_INITIALIZED:
      return { ...state, gameState: MODE_SELECTION }
    case MODE_SELECTED:
      return { ...state, mode: payload.mode }
    case MODE_SELECTION_CONFIRMED:
      return { ...state, gameState: QUIZ_SELECTION }
    case QUIZ_SELECTED:
      return {
        ...state,
        selectedQuizId: payload,
      }
    case GAME_STARTED:
      return { ...state, gameState: IN_GAME }
    case END_GAME:
      return {
        ...state,
        gameState: GAME_OVER,
        answers: payload.answers,
        justFinished: payload.quiz,
      }
    case TO_MAIN_MENU:
      return { ...state, gameState: MAIN_MENU }
    default:
      return state
  }
}
