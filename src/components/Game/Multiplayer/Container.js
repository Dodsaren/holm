import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import gql from 'graphql-tag'
import Multiplayer from './Component'
import { multiplayerGameOver as gameOver } from '../../../flux/actions'
import withData from '../../withData'

const Container = ({ participants, gameOver, data }) => (
  <Multiplayer
    quiz={data.quiz[0]}
    gameOver={gameOver}
    participants={participants}
  />
)

const mapStateToProps = ({ selectedQuizId, participants }) => ({
  selectedQuizId,
  participants,
})
const mapDispatchToProps = { gameOver }
const getQuiz = gql`
  query Quiz($id: ID) {
    quiz(id: $id) {
      id
      label
      questions {
        id
        label
        freetextSolutions
      }
    }
  }
`
const mapPropsToVariables = ({ selectedQuizId }) => ({ id: selectedQuizId })

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withData(getQuiz, mapPropsToVariables),
)(Container)
