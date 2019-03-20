import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withData from '../../data/withData'
import Component from './Component'
import { toMainMenu, initGame } from '../../../flux/actions'
import gql from 'graphql-tag'

const GameOver = props => (
  <Component
    {...props}
    solutions={props.data.quiz[0].questions.map(x => x.optionSolutions)}
  />
)

const mapStateToProps = ({ justFinished, answers, selectedQuizId }) => ({
  justFinished,
  answers,
  selectedQuizId,
})

const mapDispatchToProps = {
  toMainMenu,
  toQuizSelection: initGame,
}

export const getSolutions = gql`
  query Quiz($id: ID) {
    quiz(id: $id) {
      questions {
        optionSolutions
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
  withData(getSolutions, mapPropsToVariables),
)(GameOver)
