import React from 'react'
import Singleplayer from './Singleplayer/Container'
import Multiplayer from './Multiplayer/Container'
import { connect } from 'react-redux'
import {
  LOCAL_MULTIPLAYER_CORE,
  SINGLEPLAYER_CORE,
} from '../../constants/gameModes'

const screens = {
  [LOCAL_MULTIPLAYER_CORE]: <Multiplayer />,
  [SINGLEPLAYER_CORE]: <Singleplayer />,
}

const mapStateToProps = ({ mode }) => ({ mode })

export default connect(mapStateToProps)(({ mode }) => screens[mode])
