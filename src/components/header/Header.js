import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='hospital' circular />
      <Header.Content>Campus Light Box</Header.Content>
    </Header>
    <Image centered size='large' src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
  </div>
)

export default HeaderExampleUsersIcon