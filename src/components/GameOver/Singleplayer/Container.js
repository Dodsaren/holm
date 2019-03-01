import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withData from '../../withData'
import Component from './Component'
import { toMainMenu, initGame } from '../../../flux/actions'
import gql from 'graphql-tag'

const GameOver = ({
  justFinished,
  answers,
  data,
  toQuizSelection,
  toMainMenu,
}) => (
  <Component
    justFinished={justFinished}
    answers={answers}
    solutions={data.quiz[0].questions.map(x => x.optionSolutions)}
    toQuizSelection={toQuizSelection}
    toMainMenu={toMainMenu}
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

const variables = ({ selectedQuizId }) => ({ id: selectedQuizId })

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withData(getSolutions, variables),
)(GameOver)
