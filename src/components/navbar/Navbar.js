import React, { Component } from 'react'
import { Icon, Menu, Button, Modal, Image, Header} from 'semantic-ui-react'

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
            <Modal dimmer="blurring" trigger={<Button color="red"><Icon name='heart outline' />Get Help Now</Button>} closeIcon>
             <Modal.Header>Get Help Now</Modal.Header>
             <Modal.Content image>
             <div className='image'>
             <Icon name='right arrow' />
            </div>
           <Modal.Description>
           <Header>Help is Available!</Header>
           <p>If you or someone you know is having thoughts of suicide, 
             call 1-800-784-2433 (1-800-SUICIDE), or call your local crisis centre.</p>
        </Modal.Description>
    </Modal.Content>
  </Modal>
          
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}