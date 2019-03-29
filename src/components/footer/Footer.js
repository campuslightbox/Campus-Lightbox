import React from 'react'
import {
  Container,
  Segment,
  Button,
  Grid,
  Header,
  Modal,
  Image
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em', background: '#40798C' }}>
      <Container textAlign='center'>

        <Grid stackable>

          <Grid.Column width={5} alignItems="center">
            <Header inverted as='h4' content='Brought to you by:' />
            <Modal trigger={<Button>© Project Aurora</Button>} closeIcon>
    <Modal.Header>Abous Us</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Project Aurora</Header>
        <p>Campus Lightbox was envisioned and created by Project Aurora.</p>
        <p>We are a group of UBC students seeking to dismantle the barriers between
        <br />
          campus mental health resources and those who are in need of it.</p>
        <p>We hope to continue the much-­needed conversation about student 
          wellness
          <br />
          on college campuses across the country and to empower students 
          to take charge of their mental health.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
            <Button icon='mail' href='mailto:mentalhealthubc@gmail.com' />
          </Grid.Column>

          <Grid.Column width={4}>
            <Header inverted as='h4' content='Follow us:' />
            <div>
              <a href="https://www.facebook.com/Project-Aurora-1190802371087781/" target="_blank" rel="noopener noreferrer">
                <Button size='large' circular color='facebook' icon='facebook' /></a>
              <a href="https://www.instagram.com/proj_aurora/" target="_blank" rel="noopener noreferrer">
                <Button size='large' circular color='instagram' icon='instagram' /></a>
              <a href="https://twitter.com/ProjectAurora6" target="_blank" rel="noopener noreferrer">
                <Button size='large' circular color='twitter' icon='twitter' /></a>
              <a href="https://www.linkedin.com/company/project-aurora/" target="_blank" rel="noopener noreferrer">
                <Button size='large' circular color='linkedin' icon='linkedin' /></a>
            </div>
          </Grid.Column>

          <Grid.Column width={7}>
            <Header inverted as='h4' content='Notice of Non­Affiliation and Disclaimer:' />
            <p>
              <h6>We are not affiliated,
        associated, authorized, endorsed by, or in any way officially connected with the
        the University of British Columbia, or any of its subsidiaries or its affiliates.
        The official University of British Columbia website can be found here.</h6>
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout