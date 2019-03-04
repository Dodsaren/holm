import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import gql from 'graphql-tag'
import Singleplayer from './Singleplayer'
import { singleplayerGameOver as gameOver } from '../../../flux/actions'
import withData from '../../withData'

const Container = ({ gameOver, data }) => (
  <Singleplayer quiz={data.quiz[0]} gameOver={gameOver} />
)

const mapStateToProps = ({ selectedQuizId }) => ({
  selectedQuizId,
})

const mapDispatchToProps = { gameOver }

export const getQuiz = gql`
  query Quiz($id: ID) {
    quiz(id: $id) {
      id
      label
      questions {
        label
        options
      }
    }
  }
`

const mapPropsToVariables = ({ selectedQuizId }) => ({
  id: selectedQuizId,
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withData(getQuiz, mapPropsToVariables),
)(Container)
