import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Singleplayer from './Component'
import { connect } from 'react-redux'
import { endGame } from '../../flux/actions'

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

const Game = ({ selectedQuizId, endGame }) => (
  <Query query={GET_QUIZ} variables={{ id: selectedQuizId }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading'
      if (error) return `Error!: ${error}`
      return <Singleplayer quiz={data.quiz[0]} endGame={endGame} />
    }}
  </Query>
)

const mapStateToProps = ({ selectedQuizId }) => ({ selectedQuizId })
const mapDispatchToProps = { endGame }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game)
