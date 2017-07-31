import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Route } from 'react-router'
import { AppBar } from 'material-ui'

import PostsList from './pages/PostsList'
import PostDetail from './pages/PostDetail'
import UserDetail from './pages/UserDetail'
import { callApi } from './util/Api'
import store from './Store'

class App extends Component {
  componentDidMount () {
    callApi('/users')
    .then((users) => {
      users.forEach((user) => store.users.set(user.id, user))
    })
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title='Smartlook test'
            style={{ backgroundColor: '#1086d5' }}
            showMenuIconButton={false} />
          <div className='content'>
            <Route exact path='/' component={PostsList} />
            <Route path='/users/:id' component={UserDetail} />
            <Route path='/posts/:id' component={PostDetail} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
