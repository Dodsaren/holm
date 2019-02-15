import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import GameOverComponent from '../components/GameOver'
import { connect } from 'react-redux'

const GET_QUIZ = gql`
  query Quiz($id: ID) {
    quiz(id: $id) {
      id
      label
      questions {
        solutions
      }
    }
  }
`

const GameOver = ({ selectedQuizId }) => (
  <Query query={GET_QUIZ} variables={{ id: selectedQuizId }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading'
      if (error) return `Error!: ${error}`
      console.log(data)
      return (
        <GameOverComponent
          solutions={data.quiz[0].questions.map(x => x.solutions)}
        />
      )
    }}
  </Query>
)

const mapStateToProps = ({ selectedQuizId }) => ({ selectedQuizId })

export default connect(mapStateToProps)(GameOver)
