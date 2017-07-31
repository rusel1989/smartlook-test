import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Avatar, List, ListItem } from 'material-ui'
import { Link } from 'react-router-dom'

import { callApi } from '../util/Api'
import store from '../Store'

@observer
class PostsList extends Component {
  componentDidMount () {
    callApi('/posts')
    .then((posts) => {
      posts.forEach((post) => store.posts.set(post.id, post))
    })
  }

  render () {
    return (
      <List>
        {store.posts.values().map((post) => {
          const user = store.users.get(post.userId)
          return (
            <ListItem
              key={post.id}
              containerElement={Link}
              to={`/posts/${post.id}`}
              primaryText={post.title}
              leftAvatar={user ? <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar> : null}
              secondaryText={post.body} />

          )
        })}
      </List>
    )
  }
}

export default PostsList