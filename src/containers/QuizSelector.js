import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectQuiz, startQuiz } from '../flux/actions'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import GameMenu from '../components/GameMenu'

const GET_QUIZ = gql`
  {
    quiz {
      id
      label
    }
  }
`

class QuizSelector extends Component {
  constructor(props) {
    super(props)
    this.handleChangeQuiz = this.handleChangeQuiz.bind(this)
    this.handleStartGame = this.handleStartGame.bind(this)
  }

  handleStartGame() {
    if (!this.props.selectedQuizId) return alert('Du måste välja quiz först!')
    this.props.startQuiz()
  }

  handleChangeQuiz(e) {
    const id = parseInt(e.target.value, 10)
    this.props.selectQuiz(id)
  }

  render() {
    const { selectedQuizId } = this.props
    return (
      <Query query={GET_QUIZ}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          console.log(data.quiz)
          return (
            <GameMenu
              handleChangeQuiz={this.handleChangeQuiz}
              handleStartGame={this.handleStartGame}
              quiz={data.quiz}
              selectedQuizId={selectedQuizId}
            />
          )
        }}
      </Query>
    )
  }
}

const mapStateToProps = ({ selectedQuizId }) => ({
  selectedQuizId,
})

const mapDispatchToProps = {
  selectQuiz,
  startQuiz,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizSelector)
