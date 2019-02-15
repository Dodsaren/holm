import React from 'react'
import { connect } from 'react-redux'
import { modeConfirmed, modeSelected } from '../flux/actions'
import { SINGLEPLAYER, MULTIPLAYER } from '../flux/gameModes'

const ModeSelector = ({ mode, modeSelected, modeConfirmed }) => (
  <div>
    <h1>Select a game mode!</h1>
    <button onClick={() => modeSelected({ mode: SINGLEPLAYER })}>
      Single player
    </button>
    {mode === SINGLEPLAYER && (
      <div>
        Gammal hederlig frågesport mot dig själv.
        <button onClick={modeConfirmed}>Kör!</button>
      </div>
    )}
    <button onClick={() => modeSelected({ mode: MULTIPLAYER })}>
      Multiplayer
    </button>
    {mode === MULTIPLAYER && (
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
