import React from 'react'
import { Query } from 'react-apollo'

const withData = (query, mapPropsToVariables = null) => Component => props => {
  const variables = mapPropsToVariables && mapPropsToVariables(props)
  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        return <Component {...props} data={data} />
      }}
    </Query>
  )
}

export default withData
