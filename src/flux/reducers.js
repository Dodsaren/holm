import {
  START_GAME,
  SELECT_QUIZ,
  START_QUIZ,
  TO_MAIN_MENU,
  END_GAME,
} from './actionTypes'
import { MAIN_MENU, GAME_MENU, IN_GAME, GAME_OVER } from '../flux/gameStates'

const initialState = {
  gameState: MAIN_MENU,
  selectedQuizId: null,
  answers: [],
  justFinished: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case START_GAME:
      return { ...state, gameState: GAME_MENU }
    case SELECT_QUIZ:
      return {
        ...state,
        selectedQuizId: payload,
      }
    case START_QUIZ:
      return { ...state, gameState: IN_GAME }
    case TO_MAIN_MENU:
      return { ...state, gameState: MAIN_MENU }
    case END_GAME:
      return {
        ...state,
        gameState: GAME_OVER,
        answers: payload.answers,
        justFinished: payload.quiz,
      }
    default:
      return state
  }
}
