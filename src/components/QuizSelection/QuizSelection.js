import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import gql from 'graphql-tag'
import {
  LOCAL_MULTIPLAYER_CORE,
  SINGLEPLAYER_CORE,
} from '../../constants/gameModes'
import Singleplayer from './Singleplayer'
import Multiplayer from './Multiplayer/Container'
import withData from '../data/withData'

const QuizSelection = ({ mode, data, quizListLoaded }) =>
  map(mode)({ quizList: data.quiz })

const map = mode => props => {
  const screens = {
    [SINGLEPLAYER_CORE]: <Singleplayer {...props} />,
    [LOCAL_MULTIPLAYER_CORE]: <Multiplayer {...props} />,
  }
  return screens[mode]
}

const mapStateToProps = ({ mode }) => ({ mode })

export const getQuiz = gql`
  {
    quiz {
      id
      label
    }
  }
`

export default compose(
  connect(mapStateToProps),
  withData(getQuiz),
)(QuizSelection)
