import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu color="teal" inverted>
        <Menu.Item header>CampusLightBox</Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name='resources'
        active={activeItem === 'resources'}
        onClick={this.handleItemClick}
        />
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contactUs'
          active={activeItem === 'contactUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search Resources...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}