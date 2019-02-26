import React from 'react'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {
  LOCAL_MULTIPLAYER_CORE,
  SINGLEPLAYER_CORE,
} from '../../constants/gameModes'
import Singleplayer from './Singleplayer'
import Multiplayer from './Multiplayer/Container'

export const GET_QUIZ = gql`
  {
    quiz {
      id
      label
    }
  }
`

const optionsScreen = mode => props => {
  const screens = {
    [SINGLEPLAYER_CORE]: <Singleplayer {...props} />,
    [LOCAL_MULTIPLAYER_CORE]: <Multiplayer {...props} />,
  }
  return screens[mode]
}

const PreGameOptions = ({ mode }) => (
  <Query query={GET_QUIZ}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`
      return optionsScreen(mode)({ quizList: data.quiz })
    }}
  </Query>
)

export default connect(({ mode }) => ({ mode }))(PreGameOptions)
