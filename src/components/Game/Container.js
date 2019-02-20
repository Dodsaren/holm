import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Singleplayer from './Singleplayer'
import Multiplayer from './Multiplayer/Container'
import { connect } from 'react-redux'
import { endGame } from '../../flux/actions'
import { LOCAL_MULTIPLAYER_CORE, SINGLEPLAYER_CORE } from '../../flux/gameModes'

const GET_QUIZ = gql`
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

const loadGameMode = mode => props => {
  const screens = {
    [LOCAL_MULTIPLAYER_CORE]: <Multiplayer {...props} />,
    [SINGLEPLAYER_CORE]: <Singleplayer {...props} />,
  }
  return screens[mode]
}

const Game = ({ selectedQuizId, mode, endGame }) => (
  <Query query={GET_QUIZ} variables={{ id: selectedQuizId }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading'
      if (error) return `Error!: ${error}`
      return loadGameMode(mode)({ quiz: data.quiz[0], endGame })
    }}
  </Query>
)

const mapStateToProps = ({ selectedQuizId, mode }) => ({ selectedQuizId, mode })
const mapDispatchToProps = { endGame }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game)
