import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = ({ participants }) => ({ participants })

export default connect(mapStateToProps)(props => Component({ ...props }))
