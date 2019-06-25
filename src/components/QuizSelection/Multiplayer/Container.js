import { connect } from 'react-redux'
import Component from './Component'
import { participantAdded, participantRemoved } from '../../../flux/actions'

const mapStateToProps = ({ participants }) => ({ participants })
const mapDispatchToProps = { participantAdded, participantRemoved }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => Component({ ...props }))
