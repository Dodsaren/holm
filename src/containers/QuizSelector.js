import React from 'react'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { MULTIPLAYER, SINGLEPLAYER } from '../flux/gameModes'
import SingleplayerOptions from './SingleplayerOptions'
import MultiplayerOptions from './MultiplayerOptions'

const GET_QUIZ = gql`
  {
    quiz {
      id
      label
    }
  }
`

const optionsScreen = mode => props => {
  const screens = {
    [SINGLEPLAYER]: <SingleplayerOptions {...props} />,
    [MULTIPLAYER]: <MultiplayerOptions {...props} />,
  }
  return screens[mode]
}

const QuizSelector = ({ mode }) => (
  <Query query={GET_QUIZ}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`
      return optionsScreen(mode)({ quizList: data.quiz })
    }}
  </Query>
)

export default connect(({ mode }) => ({ mode }))(QuizSelector)
