import React from 'react'
import {
  Container,
  Segment,
  Button,
  Grid,
  Header,
  Modal
} from 'semantic-ui-react'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-139413334-1');

const trackGA = (buttonName) => {
  ReactGA.event({
      category: 'Footer',
      action: 'Clicked ' + buttonName + ' Button'
    });
}

const FixedMenuLayout = () => (
  <div>
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em', background: '#40798C' }}>
      <Container textAlign='center'>

        <Grid stackable>

          <Grid.Column width={5} alignitems="center">
            <Header inverted as='h4' content='Brought to you by:' />
            <Modal trigger={<Button onClick={() => trackGA("About Project Aurora")}>© Project Aurora</Button>} closeIcon size='large'>
              <Modal.Header><center>About Us</center></Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <center><p>Campus Lightbox was envisioned and created by <b>Project Aurora.</b></p>
                    <p>We are a group of UBC students seeking to dismantle the barriers between
        <br />
                      campus mental health resources and those who are in need of it.</p>
                    <p>We hope to continue the much-­needed conversation about student
                      wellness
          <br />
                      on college campuses across the country and to empower students
          to take charge of their mental health.</p></center>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {/* <Button onClick={() => trackGA("Email")} icon='mail' href='mailto:admin@projectaurora.ca' /> */}
            <br />
            <br />
            Email us: <a href="mailto:admin@projectaurora.ca" target="_blank" style={{color:"white",textDecoration:"none"}}>admin@projectaurora.ca</a>
          </Grid.Column>

          <Grid.Column width={4}>
            <Header inverted as='h4' content='Follow us:' />
            <Button.Group>
              <a href="https://www.facebook.com/campuslightbox/" target="_blank" rel="noopener noreferrer">
                <Button onClick={() => trackGA("Facebook")} size='large' circular color='facebook' icon='facebook' /></a>
              <a href="https://www.instagram.com/campuslightbox/" target="_blank" rel="noopener noreferrer">
                <Button  onClick={() => trackGA("Instagram")} size='large' circular color='instagram' icon='instagram' /></a>
              <a href="https://twitter.com/campuslightbox/" target="_blank" rel="noopener noreferrer">
                <Button onClick={() => trackGA("Twitter")} size='large' circular color='twitter' icon='twitter' /></a>
              <a href="https://www.linkedin.com/company/project-aurora/" target="_blank" rel="noopener noreferrer">
                <Button onClick={() => trackGA("LinkedIn")} size='large' circular color='linkedin' icon='linkedin' /></a>
                </Button.Group>

          </Grid.Column>

          <Grid.Column width={7}>
            <Header inverted as='h4' content='Notice of Non­-Affiliation and Disclaimer:' />
            <h6>We are not affiliated,
        associated, authorized, endorsed by, or in any way officially connected with
        the University of British Columbia, or any of its subsidiaries or its affiliates.
        The official University of British Columbia website can be found <a href="https://www.ubc.ca/" target="_blank" style={{color:"white",textDecoration:"none"}}>here</a>.</h6>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout