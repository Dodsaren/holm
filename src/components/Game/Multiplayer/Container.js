import React from 'react'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Multiplayer from './Component'
import { endGame } from '../../../flux/actions'

export const GET_QUIZ = gql`
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

const Container = ({ selectedQuizId, participants, endGame }) => (
  <Query query={GET_QUIZ} variables={{ id: selectedQuizId }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading'
      if (error) return `Error!: ${error}`
      return (
        <Multiplayer
          quiz={data.quiz[0]}
          endGame={endGame}
          participants={participants}
        />
      )
    }}
  </Query>
)

const mapStateToProps = ({ selectedQuizId, participants }) => ({
  selectedQuizId,
  participants,
})
const mapDispatchToProps = { endGame }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
