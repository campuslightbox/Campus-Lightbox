import React, { Component } from 'react'
import { Icon, Button, Modal, Header } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  render() {
    return (
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
    )
  }
}