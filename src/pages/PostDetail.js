import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Avatar, List, ListItem, Subheader } from 'material-ui'
import { Link } from 'react-router-dom'

import { callApi } from '../util/Api'
import LetterAvatar from '../components/LetterAvatar'
import store from '../Store'

@observer
class PostDetail extends Component {
  state = {
    comments: []
  }
  componentDidMount () {
    const postId = this.props.match.params.id
    if (!store.posts.get(postId)) {
      callApi(`/posts/${postId}`)
      .then((post) => {
        store.posts.set(post.id, post)
      })
    }
    callApi(`/posts/${postId}/comments`)
    .then((comments) => {
      this.setState({ comments })
    })
  }
  
  render () {
    const post = store.posts.get(this.props.match.params.id)
    const author = post ? store.users.get(post.userId) : null
    return (
      <div className='post-detail'>
        <div className='post-content'>
          {post ? (
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ) : null}
          {author ? (
            <Link to={`/users/${post.userId}`}>
              by {author.name}
            </Link>
          ) : null}
        </div>
        <List>
          <Subheader style={{ color: '#000', fontWeight: 'bold' }}>Comments</Subheader>
          {this.state.comments.map((comment) => 
            <ListItem
              key={comment.id}
              leftAvatar={<Avatar backgroundColor='#5aa8dc'>{comment.email.charAt(0).toUpperCase()}</Avatar>}
              primaryText={comment.body}
              secondaryText={comment.email} />
          )}
        </List>
      </div>
    )
  }
}

export default PostDetail