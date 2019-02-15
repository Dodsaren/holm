import MainMenu from '../components/MainMenu'
import { connect } from 'react-redux'
import { initGame } from '../flux/actions'

export default connect(
  null,
  { initGame },
)(MainMenu)
