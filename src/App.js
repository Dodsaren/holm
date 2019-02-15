import React from 'react'
import { connect } from 'react-redux'
import MainMenu from './containers/MainMenu'
import GameMenu from './containers/GameMenu'
import Game from './containers/Game'
import GameOver from './containers/GameOver'
import { MAIN_MENU, GAME_MENU, IN_GAME, GAME_OVER } from './flux/gameStates'

const screens = {
  [MAIN_MENU]: <MainMenu />,
  [GAME_MENU]: <GameMenu />,
  [IN_GAME]: <Game />,
  [GAME_OVER]: <GameOver />,
}
const App = ({ gameState }) => screens[gameState]
const mapStateToProps = ({ gameState }) => ({ gameState })
export default connect(mapStateToProps)(App)
