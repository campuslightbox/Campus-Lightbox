import React from 'react'
import {
  Container,
  Divider,
  Segment,
  Button,
  Icon,
  Header
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em', background: '#40798C'}}>
      <Container textAlign='center'>
        <div>
          <Button  size='massive'circular color='facebook' icon='facebook' />
          <Button size='massive' circular color='instagram' icon='instagram' />
          <Button size='massive' circular color='twitter' icon='twitter' />
          <Button size='massive' circular color='linkedin' icon='linkedin' />
          
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