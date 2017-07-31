import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Avatar, List, ListItem, Subheader } from 'material-ui'

import store from '../Store'

@observer
class UserDetail extends Component {
  render () {
    const user = store.users.get(this.props.match.params.id)
    return (
      <div className='user-detail'>
        {user
        ? (
          <div>
            <h2>{user.name}</h2>
            <List>
              <ListItem 
                primaryText='Email'
                containerElement='a'
                href={`mailto:${user.email}`}
                secondaryText={user.email} />
              <ListItem 
                primaryText='Phone'
                containerElement='a'
                href={`tel:${user.phone}`}
                secondaryText={user.phone} />
              <ListItem 
                primaryText='Website'
                containerElement='a'
                target='_blank'
                href={`//${user.website}`}
                secondaryText={`${user.website}`} />
              <ListItem 
                primaryText='Address'
                secondaryText={`${user.address.street} ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`} />
              <ListItem 
                primaryText='Company'
                secondaryText={`${user.company.name}`} />
            </List>
          </div>
        ) : null}
      </div>
    )
  }
}

export default UserDetail