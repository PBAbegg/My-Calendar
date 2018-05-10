import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// npm install apollo-boost react-apollo graphql-tag graphql --save
// npm install react-router-dom
// npm install material-ui

import {client} from './EndPoint'
import Routes from './Components/Routes'


const App = (
  <Router>
    <ApolloProvider client={client}>
      <MuiThemeProvider>
          <Routes/>
      </MuiThemeProvider>
    </ApolloProvider>
  </Router>
)


ReactDOM.render(App, document.getElementById('root'))