import React from 'react'
import { connect } from 'react-redux'
import Button from '../common/Button/Button'
import { modeConfirmed, modeSelected } from '../../flux/actions'
import {
  SINGLEPLAYER_CORE,
  LOCAL_MULTIPLAYER_CORE,
} from '../../constants/gameModes'

const ModeSelector = ({ mode, modeSelected, modeConfirmed }) => (
  <div>
    <h1>Select a game mode!</h1>
    <Button
      icon="user"
      onClick={() => modeSelected({ mode: SINGLEPLAYER_CORE })}
    >
      Single player
    </Button>
    {mode === SINGLEPLAYER_CORE && (
      <div>
        Gammal hederlig frågesport mot dig själv.
        <button onClick={modeConfirmed}>Kör!</button>
      </div>
    )}
    <Button
      icon="users"
      onClick={() => modeSelected({ mode: LOCAL_MULTIPLAYER_CORE })}
    >
      Multiplayer
    </Button>
    {mode === LOCAL_MULTIPLAYER_CORE && (
      <div>
        Frågesport med vänner!
        <button onClick={modeConfirmed}>Kör!</button>
      </div>
    )}
  </div>
)

const mapStateToProps = ({ mode }) => ({ mode })

const mapDispatchToProps = {
  modeConfirmed,
  modeSelected,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModeSelector)
