import React from 'react'
import { connect } from 'react-redux'
import MainMenu from '../MainMenu/MainMenu'
import QuizSelection from '../QuizSelection/QuizSelection'
import Game from '../Game/Game'
import GameOver from '../GameOver/GameOver'
import ModeSelector from '../ModeSelector/Component'
import {
  MAIN_MENU,
  QUIZ_SELECTION,
  MODE_SELECTION,
  IN_GAME,
  GAME_OVER,
} from '../../constants/gameStates'
import styles from './app.module.css'

const screens = {
  [MAIN_MENU]: <MainMenu />,
  [QUIZ_SELECTION]: <QuizSelection />,
  [MODE_SELECTION]: <ModeSelector />,
  [IN_GAME]: <Game />,
  [GAME_OVER]: <GameOver />,
}

const App = ({ gameState }) => (
  <div className={styles.app}>
    {screens[gameState] || <Error gameState={gameState} />}
  </div>
)

const mapStateToProps = ({ gameState }) => ({ gameState })

export default connect(mapStateToProps)(App)

const Error = ({ gameState }) => (
  <div>
    <h2>Det gick inte att ladda in {gameState}</h2>
  </div>
)
