import React from 'react'
import { connect } from 'react-redux'
import MainMenu from './components/MainMenu/Container'
import PreGameOptions from './components/PreGame/Container'
import Game from './components/Game/Game'
import GameOver from './components/GameOver/Container'
import ModeSelector from './components/ModeSelector/Component'
import {
  MAIN_MENU,
  QUIZ_SELECTION,
  MODE_SELECTION,
  IN_GAME,
  GAME_OVER,
} from './flux/gameStates'

const screens = {
  [MAIN_MENU]: <MainMenu />,
  [QUIZ_SELECTION]: <PreGameOptions />,
  [MODE_SELECTION]: <ModeSelector />,
  [IN_GAME]: <Game />,
  [GAME_OVER]: <GameOver />,
}
const App = ({ gameState }) => screens[gameState]
const mapStateToProps = ({ gameState }) => ({ gameState })
export default connect(mapStateToProps)(App)
