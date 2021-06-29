import React from "react";
import {
  Card,
  Image,
  Label,
  Icon,
  Button,
  Popup,
  Grid,
} from "semantic-ui-react";
import "./InfoCard.css";

import { styles } from "./InfoCard";
import MediaQuery from "react-responsive";
import MediaQueryHelper from "static/MediaQueryHelper";
import _ from "underscore";
import defaultbackground from "./mountains.jpg";
import Tags from "static/Tags";
import moment from "moment";
import FeedbackModal from "components/feedbackModal/FeedbackModal";

const BackCard = (props) => {
  const {
    logo,
    background,
    name,
    description,
    tags,
    hours,
    phone,
    address,
    email,
    social,
  } = props;
  //console.log(props, "what is social");
  const phonelink = "tel://1-" + phone;
  const addresslink = "https://maps.google.com/?q=" + address;
  const emailLink = "mailto:" + email;
  const renderReportButton = () => {
    return (
      <div id="report-button">
        <FeedbackModal
          trigger={
            <Button basic icon floated="right" size="small">
              <Popup
                size="tiny"
                content="Report incorrect information"
                trigger={<Icon name="flag" />}
              />
            </Button>
          }
          subject={'Inaccurate information regarding "' + name + '"'}
        />
      </div>
    );
  };

  // CONTINEU FROM RENDER SOCIAL BUTTONS - make it prettier!!!
  const renderSocialButtons = (social) => {
    return (
      <>
        {social && social.website && (
          <Button
            circular
            color="grey"
            icon="world"
            onClick={() => window.open(social.website)}
          />
        )}
        {social && social.facebook && (
          <Button
            circular
            color="facebook"
            icon="facebook"
            onClick={() => window.open(social.facebook)}
          />
        )}
        {social && social.instagram && (
          <Button
            circular
            color="instagram"
            icon="instagram"
            onClick={() => window.open(social.instagram)}
          />
        )}
        {social && social.twitter && (
          <Button
            circular
            color="twitter"
            icon="twitter"
            onClick={() => window.open(social.twitter)}
          />
        )}
      </>
    );
  };

  // use in both front and back
  const _isOpen = () => {
    const todayDay = moment().format("dddd").toLowerCase();
    if (hours[todayDay]) {
      const hoursString = hours[todayDay];
      const [openString, closeString] = hoursString.split("-");

      const todayOpen = moment(openString, "h:mma");
      const todayClose = moment(closeString, "h:mma");
      return moment().isBetween(todayOpen, todayClose);
    } else {
      return false;
    }
  };

  const _capitalize = (text) => {
    if (!text || text.length < 1) {
      return;
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  };

  //  Grid row and Card Content is repetitive!
  // renderElements function here to return the same grid
  // need to conditionally render the elements -- different cards have different elements

  // rewrite thsi again to incorporate render social icons function as a parameter
  const GridElement = (...args) => {
    const [eleName, URLLink, itemName, fn] = args;
    if (itemName) {
      return (
        <Grid.Row key={`back-${eleName}`} style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            {eleName}:
          </Grid.Column>
          <Grid.Column width={12}>
            <Card.Content key="back-contact" style={styles.infoCardSection}>
              <Card.Description>
                {fn
                  ? fn
                  : itemName && (
                      <a
                        href={URLLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {itemName}
                      </a>
                    )}
              </Card.Description>
            </Card.Content>
          </Grid.Column>
        </Grid.Row>
      );
    } else return null;
  };

  // REWRITE RENDER HOURS!!! don't use an array!!
  const renderHours = () => {
    if (!hours) {
      return;
    }
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    return <div>hours !</div>;
  };

  return (
    <>
      <Card.Content
        key="back-header"
        style={_.extend(styles.backNameHeader, styles.infoCardSection)}
      >
        <Card.Header>
          {renderReportButton()}
          {name}
        </Card.Header>
      </Card.Content>
      <Card.Content key="back-content" style={styles.backHeader}>
        <Grid>
          {GridElement("Phone", phonelink, phone)}
          {GridElement("Address", addresslink, address)}
          {GridElement("Email", emailLink, email)}
          {GridElement("Social", null, true, renderSocialButtons(social))}
          {renderHours()}
        </Grid>
      </Card.Content>
    </>
  );
};

export default BackCard;
