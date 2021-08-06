import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import React, { Component } from 'react';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-139413334-1');

export default class MenuHeader extends Component {
  trackGA = (buttonName) => {
    ReactGA.event({
      category: 'Header',
      action: 'Clicked ' + buttonName + ' Button'
    });
  };

  render() {
    return (
      <Modal
        dimmer='blurring'
        trigger={
          <Button onClick={() => this.trackGA('COVID-19')} color='yellow'>
            <Icon name='stethoscope' />
            COVID-19 Updates
          </Button>
        }
        closeIcon
      >
        <Modal.Header>COVID-19 Updates</Modal.Header>
        <Modal.Content image>
          <div className='image'>
            <Icon name='stethoscope' />
          </div>
          <Modal.Description>
            <Header>
              Here&apos;s the latest news on the COVID-19 outbreak!
            </Header>
            <p>
              Our team at Campus Lightbox understands that this a tough time,
              which is why we have updated the website to include information
              about how you might be able to reach your favored resource in this
              trying time. Unprecedented times, call for unprecedented care!
              Stay safe.
            </p>
            <a
              href='https://students.ubc.ca/covid19'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button color='blue'>UBC Resources for COVID-19</Button>
            </a>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
