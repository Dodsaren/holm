import React from 'react'
import { connect } from 'react-redux'
import Singleplayer from './Singleplayer/Container'
import Multiplayer from './Multiplayer/Container'
import {
  SINGLEPLAYER_CORE,
  LOCAL_MULTIPLAYER_CORE,
} from '../../constants/gameModes'

const map = {
  [SINGLEPLAYER_CORE]: <Singleplayer />,
  [LOCAL_MULTIPLAYER_CORE]: <Multiplayer />,
}

const GameOver = ({ mode }) => map[mode] || <p>No component for mode: {mode}</p>

const mapStateToProps = ({ mode }) => ({ mode })

export default connect(mapStateToProps)(GameOver)
