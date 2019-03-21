import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
  Icon
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Segment color="blue" inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
      <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
  </div>

        <Divider inverted section />
        <h5>Campus Lightbox</h5>
        <h6>© Project Aurora | Notice of Non­Affiliation and Disclaimer: We are not affiliated, 
        associated, authorized, endorsed by, or in any way officially connected with the 
        the University of British Columbia, or any of its subsidiaries or its affiliates. 
        The official University of British Columbia website can be found here.</h6>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout