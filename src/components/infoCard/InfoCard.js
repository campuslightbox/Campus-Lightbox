import React, { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  Image,
  Label,
  Popup,
} from "semantic-ui-react";
import "./InfoCard.css";

// front and back card
import BackCard from "./backCard";
import FrontCard from "./frontCard";

import FeedbackModal from "components/feedbackModal/FeedbackModal";

import ReactGA from "react-ga";
import _ from "underscore";
import moment from "moment";

ReactGA.initialize("UA-139413334-1");

// TO-DO
//  1. REWRITE FUNCTION FOR READABILITY
//  2. EXTRACT SOME FUNCTIONS / TURN IT INTO ITS OWN COMPONENT - CLEANER CODE --> create FrontCard.js

function InfoCard(props) {
  const [side, setSide] = useState("front");

  // destructure props
  const { name, address, hours, phone, email, notes, social } = props;

  const onContactButtonClick = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked View Details: " + name,
    });
    setSide("back");
  };

  const onCloseButtonClick = () => {
    setSide("front");
  };

  // ok --> used both in front and  back card --> helper function
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

  // -----------------------------------//////-----------------
  // BACK of the card

  const renderPhoneNumber = () => {
    const link = "tel://1-" + phone;

    return (
      <Card.Content key="back-contact" style={styles.infoCardSection}>
        <Card.Description>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {phone}
          </a>
        </Card.Description>
      </Card.Content>
    );
  };

  const renderAddress = () => {
    const link = "https://maps.google.com/?q=" + address;

    return (
      <Card.Content style={styles.infoCardSection}>
        {address && (
          <Card.Description>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          </Card.Description>
        )}
      </Card.Content>
    );
  };

  const renderEmail = () => {
    return (
      <Card.Content style={styles.infoCardSection}>
        {email && (
          <a href={"mailto:" + email} target="_blank" rel="noopener noreferrer">
            {email}
          </a>
        )}
      </Card.Content>
    );
  };

  // REWRITE THIS FUNCTION
  const renderSocial = () => {
    return (
      <Card.Content key="back-social-email" style={styles.infoCardSection}>
        <Card.Description>
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
        </Card.Description>
      </Card.Content>
    );
  };

  // REWRITE !!! THIS FUNCTION IS TOO BIG
  const renderHours = () => {
    if (!hours) {
      return;
    }

    const content = [];

    if (hours.others) {
      content.push(
        <Card.Description key="others">{hours.others}</Card.Description>
      );
    } else {
      const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ];
      _.each(days, (dayInWeek, index) => {
        const hoursForDay = hours[dayInWeek]; // example of debuggin React
        const isToday = index + 1 === moment().isoWeekday();
        const isOpen = _isOpen();
        const iconColor = isOpen ? "green" : "red";

        content.push(
          <div key={dayInWeek}>
            <div style={styles.hoursLabel}>
              {_capitalize(dayInWeek).slice(0, 3) + ": "}
            </div>
            <div style={styles.hours}>
              {!hoursForDay ? "Closed" : hoursForDay}
            </div>
            <div style={{ display: "inline-block" }}>
              {isToday && (
                <Icon
                  name="circle"
                  color={iconColor}
                  size="small"
                  style={{ marginLeft: 6 }}
                />
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <Grid.Row key="back-hours" style={styles.backRow}>
        <Divider style={styles.divider} />
        <Card.Content style={styles.infoCardSection}>{content}</Card.Content>
      </Grid.Row>
    );
  };

  const renderNotes = () => {
    if (!notes) {
      return;
    }

    return (
      <Grid.Row key="back-notes" style={styles.backRow}>
        <Divider style={styles.divider} />
        <Card.Content style={styles.infoCardSection}>{notes}</Card.Content>
      </Grid.Row>
    );
  };

  const renderLastElement = () => {
    // Hack to make sure button sticks to the bottom of the card
    return <Card.Content key="back-last" style={styles.infoCardLast} />;
  };

  const _capitalize = (text) => {
    if (!text || text.length < 1) {
      return;
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  };

  // REWRITE THIS - REMOVE REPETED CODE AND INSTEAD OF RETURNING AN ARRAY RETURN THE COMPONENT!
  const renderBack = () => {
    const views = []; // rewrite this !!

    return (
      <Card.Content key="back-content" style={styles.backHeader}>
        <BackCard />
        <Grid>
          <Grid.Row key="back-phone" style={styles.backRow}>
            <Grid.Column width={4} style={styles.backLabel}>
              Phone:
            </Grid.Column>
            <Grid.Column width={12}>{renderPhoneNumber()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    );

    // if (phone) {
    //   views.push(
    //     <Grid.Row key="back-phone" style={styles.backRow}>
    //       <Grid.Column width={4} style={styles.backLabel}>
    //         Phone:
    //       </Grid.Column>
    //       <Grid.Column width={12}>{renderPhoneNumber()}</Grid.Column>
    //     </Grid.Row>
    //   );
    // }

    // if (address) {
    //   views.push(
    //     <Grid.Row key="back-address" style={styles.backRow}>
    //       <Grid.Column width={4} style={styles.backLabel}>
    //         Address:
    //       </Grid.Column>
    //       <Grid.Column width={12}>{renderAddress()}</Grid.Column>
    //     </Grid.Row>
    //   );
    // }

    // if (email) {
    //   views.push(
    //     <Grid.Row key="back-email" style={styles.backRow}>
    //       <Grid.Column width={4} style={styles.backLabel}>
    //         Email:
    //       </Grid.Column>
    //       <Grid.Column width={12}>{renderEmail()}</Grid.Column>
    //     </Grid.Row>
    //   );
    // }

    // if (social) {
    //   views.push(
    //     <Grid.Row key="back-social" style={styles.backRow}>
    //       <Grid.Column width={4} style={styles.backLabel}>
    //         Social:
    //       </Grid.Column>
    //       <Grid.Column width={12}>{renderSocial()}</Grid.Column>
    //     </Grid.Row>
    //   );
    // }

    // if (hours) {
    //   views.push(renderHours());
    // }

    // if (notes) {
    //   views.push(renderNotes());
    // }

    // views.push(renderLastElement());

    // return [
    //   renderNameBack(),
    //   <Card.Content key="back-content" style={styles.backHeader}>
    //     <Grid>{views}</Grid>
    //   </Card.Content>,
    // ];
  };

  return (
    <Card style={styles.infoCard}>
      {side === "front" ? <FrontCard {...props} /> : <BackCard {...props} />}
      {side === "front" ? (
        <div className="bottom-button">
          <Button attached="bottom" basic onClick={onContactButtonClick}>
            <Icon name="angle right" /> View Details
          </Button>
        </div>
      ) : (
        <div className="bottom-button">
          <Button attached="bottom" basic onClick={onCloseButtonClick}>
            <Icon name="angle right" /> See Less
          </Button>
        </div>
      )}
    </Card>
  );
}

export const styles = {
  infoCard: {
    borderRadius: 10,
  },

  infoCardImage: {
    objectFit: "cover",
    height: 200,
    width: "100%",
  },
  infoCardImageMobile: {
    objectFit: "cover",
    height: 80,
    width: "100%",
    opacity: 0.5,
  },
  infoCardFrontContent: {
    border: "none",
  },
  infoCardLast: {
    flexGrow: 1,
    border: "none",
    padding: 0,
  },
  tag: {
    padding: "6px 8px 6px 8px",
    color: "white",
    borderRadius: 10,
    marginTop: 4,
  },
  backRow: {
    padding: "8px 10px 8px 10px",
    wordBreak: "break-word",
    color: "#666666",
    width: "100%",
  },
  backLabel: {
    padding: 0,
  },
  backHeader: {
    border: "none",
  },
  backNameHeader: {
    padding: "14px 10px 14px 10px",
  },
  reportButton: {
    backgroundColor: "blue",
  },
  hoursLabel: {
    width: 35,
    marginRight: 40,
    display: "inline-block",
    color: "#666666",
  },
  hours: {
    display: "inline-block",
    color: "#666666",
  },
  divider: {
    width: "100%",
    margin: "0px 0px 8px 0px",
  },
};

export default InfoCard;
