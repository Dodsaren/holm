import React from 'react'
import { connect } from 'react-redux'
import MainMenu from './containers/MainMenu'
import QuizSelector from './containers/QuizSelector2'
import Game from './containers/Game'
import GameOver from './containers/GameOver'
import ModeSelector from './components/ModeSelector'
import {
  MAIN_MENU,
  QUIZ_SELECTION,
  MODE_SELECTION,
  IN_GAME,
  GAME_OVER,
} from './flux/gameStates'

const screens = {
  [MAIN_MENU]: <MainMenu />,
  [QUIZ_SELECTION]: <QuizSelector />,
  [MODE_SELECTION]: <ModeSelector />,
  [IN_GAME]: <Game />,
  [GAME_OVER]: <GameOver />,
}
const App = ({ gameState }) => screens[gameState]
const mapStateToProps = ({ gameState }) => ({ gameState })
export default connect(mapStateToProps)(App)
