import {
  Button,
  Container,
  Grid,
  Header,
  Modal,
  Segment,
} from 'semantic-ui-react';

import FeedbackModal from 'components/feedbackModal/FeedbackModal';
import PrivacyPolicy from 'components/footer/PrivacyPolicy';
import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-139413334-1');

const trackGA = (buttonName) => {
  ReactGA.event({
    category: 'Footer',
    action: 'Clicked ' + buttonName + ' Button',
  });
};

const styles = {
  socialGroup: {
    marginBottom: 12,
  },
};

const FixedMenuLayout = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{
        margin: '5em 0em 0em',
        padding: '3em 0em',
        background: '#40798C',
      }}
    >
      <Container textAlign="center">
        <Grid stackable>
          <Grid.Column width={5} alignitems="center">
            <Header inverted as="h4" content="Brought to you by:" />
            <Modal
              trigger={
                <Button onClick={() => trackGA('About Project Aurora')}>
                  © Project Aurora
                </Button>
              }
              closeIcon
              size="large"
            >
              <Modal.Header>
                <center>About Us</center>
              </Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <center>
                    <p>
                      Campus Lightbox was envisioned and created by <b>Project Aurora.</b>
                    </p>
                    <p>
                      Project Aurora is a registered non-profit aimed at
                      accelerating the creation, growth, <br />
                      and impact of youth-led mental health initiatives by
                      providing mentorship,
                      <br />
                      connections, administrative/logistical support, and
                      funding.
                    </p>
                    <p>
                      We hope to continue the much-­needed conversation about
                      student <br />
                      wellness on college campuses across the country and to
                      empower students <br />
                      to take charge of their mental health.
                    </p>
                  </center>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {/* <Button onClick={() => trackGA("Email")} icon='mail' href='mailto:admin@projectaurora.ca' /> */}
            <br />
            <br />
            Email us:{' '}
            <a
              href="mailto:admin@campuslightbox.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              admin@campuslightbox.com
            </a>
            <br />
            Resources last updated March 08, 2025
          </Grid.Column>

          <Grid.Column width={4} alignitems="center">
            <Header inverted as="h4" content="Follow us:" />
            <Button.Group style={styles.socialGroup}>
              <a
                href="https://www.facebook.com/campuslightbox/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('Facebook')}
                  size="large"
                  circular
                  color="facebook"
                  icon="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/campuslightbox/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('Instagram')}
                  size="large"
                  circular
                  color="instagram"
                  icon="instagram"
                />
              </a>
              <a
                href="https://twitter.com/campuslightbox/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('Twitter')}
                  size="large"
                  circular
                  color="twitter"
                  icon="twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/project-aurora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('LinkedIn')}
                  size="large"
                  circular
                  color="linkedin"
                  icon="linkedin"
                />
              </a>
            </Button.Group>
            <FeedbackModal
              trigger={<Button color="orange">Give Us Feedback</Button>}
            />
          </Grid.Column>

          <Grid.Column width={7}>
            <Header
              inverted
              as="h4"
              content="Notice of Non­-Affiliation and Disclaimer:"
            />
            <h6>
              We are not affiliated, associated, authorized, endorsed by, or in
              any way officially connected with the University of British
              Columbia, or any of its subsidiaries or its affiliates. The
              official University of British Columbia website can be found{' '}
              <a
                href="https://www.ubc.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                here
              </a>
              .
            </h6>
            <PrivacyPolicy></PrivacyPolicy>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
