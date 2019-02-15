import MainMenu from '../components/MainMenu'
import { connect } from 'react-redux'
import { startGame } from '../flux/actions'

export default connect(
  null,
  { startGame },
)(MainMenu)
