import {
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  Image,
  Label,
} from "semantic-ui-react";

import MediaQuery from "react-responsive";
import MediaQueryHelper from "static/MediaQueryHelper";
import React from "react";
import Tags from "./QuizTags";
import _ from "underscore";
import background from "./mountains.jpg";
import moment from "moment";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "front",
    };
  }
  onContactButtonClick = () => {
    this.setState({ side: "back" });
  };

  onCloseButtonClick = () => {
    this.setState({ side: "front" });
  };

  renderFront = () => {
    return [
      <MediaQuery
        key="front-laptop-image"
        minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}
      >
        <Image
          src={this.props.background || background}
          size="medium"
          key="front-image"
          style={styles.infoCardImageMobile}
        />
        {this.props.logo && (
          <img className="banner-logo" alt="logo" src={this.props.logo} />
        )}
      </MediaQuery>,
      <MediaQuery
        key="front-mobile-image"
        maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}
      >
        <Image
          src={this.props.background || background}
          size="medium"
          key="front-image"
          style={styles.infoCardImageMobile}
        />
        {this.props.logo && (
          <img className="banner-logo" alt="logo" src={this.props.logo} />
        )}
      </MediaQuery>,
      <Card.Content key="front-content" style={styles.infoCardFrontContent}>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Description>{this.props.description}</Card.Description>
      </Card.Content>,
      <Card.Content key="front-extra" style={styles.infoCardFrontContent} extra>
        <Card.Meta style={{ marginBottom: 8 }}>
          {_.map(this.props.tags, (tag) => this.renderTag(tag))}
        </Card.Meta>
        {this.props.hours && this.renderTodayHours()}
      </Card.Content>,
    ];
  };

  renderTodayHours = () => {
    // Check if resource is 24/7
    if (this.props.tags.indexOf("allday") > -1) {
      return (
        <Card.Meta>
          <Icon name="circle" color="green" />
          Open 24 / 7
        </Card.Meta>
      );
    }

    const todayDay = moment().format("dddd").toLowerCase();

    if (this.props.hours[todayDay]) {
      const isOpen = this._isOpen();
      const iconColor = isOpen ? "green" : "red";

      return (
        <Card.Meta>
          <Icon name="circle" color={iconColor} />
          {" " + this.props.hours[todayDay]}
        </Card.Meta>
      );
    } else {
      if (!this.props.hours.others) {
        // Resource does not have alternative hours, so it is closed
        return (
          <Card.Meta>
            <Icon name="circle" color="red" />
            Closed
          </Card.Meta>
        );
      }
    }
  };

  renderTag = (tag) => {
    const displayName = Tags.getDisplayNameForTag(tag);
    const color = Tags.getColorForTag(tag);
    const Top = Tags.getTopValue(tag);
    if (Top) {
      return (
        <Label
          as="a"
          key={displayName}
          style={_.extend(
            { backgroundColor: color, borderColor: color },
            styles.tag
          )}
        >
          {displayName}
        </Label>
      );
    }
  };

  renderNameBack = () => {
    return (
      <Card.Content
        key="back-header"
        style={_.extend(styles.backNameHeader, styles.infoCardSection)}
      >
        <Card.Header>{this.props.name}</Card.Header>
      </Card.Content>
    );
  };

  renderPhoneNumber = () => {
    const link = "tel://1-" + this.props.phone;

    return (
      <Card.Content key="back-contact" style={styles.infoCardSection}>
        <Card.Description>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {this.props.phone}
          </a>
        </Card.Description>
      </Card.Content>
    );
  };

  renderAddress = () => {
    const link = "https://maps.google.com/?q=" + this.props.address;

    return (
      <Card.Content style={styles.infoCardSection}>
        {this.props.address && (
          <Card.Description>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {this.props.address}
            </a>
          </Card.Description>
        )}
      </Card.Content>
    );
  };

  renderEmail = () => {
    return (
      <Card.Content style={styles.infoCardSection}>
        {this.props.email && (
          <a
            href={"mailto:" + this.props.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.email}
          </a>
        )}
      </Card.Content>
    );
  };

  renderSocial = () => {
    return (
      <Card.Content key="back-social-email" style={styles.infoCardSection}>
        <Card.Description>
          {this.props.social && this.props.social.website && (
            <Button
              circular
              color="grey"
              icon="world"
              onClick={() => window.open(this.props.social.website)}
            />
          )}
          {this.props.social && this.props.social.facebook && (
            <Button
              circular
              color="facebook"
              icon="facebook"
              onClick={() => window.open(this.props.social.facebook)}
            />
          )}
          {this.props.social && this.props.social.instagram && (
            <Button
              circular
              color="instagram"
              icon="instagram"
              onClick={() => window.open(this.props.social.instagram)}
            />
          )}
          {this.props.social && this.props.social.twitter && (
            <Button
              circular
              color="twitter"
              icon="twitter"
              onClick={() => window.open(this.props.social.twitter)}
            />
          )}
        </Card.Description>
      </Card.Content>
    );
  };

  renderHours = () => {
    if (!this.props.hours) {
      return;
    }

    const content = [];

    if (this.props.hours.others) {
      content.push(
        <Card.Description key="others">
          {this.props.hours.others}
        </Card.Description>
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
        const hoursForDay = this.props.hours[dayInWeek];
        const isToday = index + 1 === moment().isoWeekday();
        const isOpen = this._isOpen();
        const iconColor = isOpen ? "green" : "red";

        content.push(
          <div key={dayInWeek}>
            <div style={styles.hoursLabel}>
              {this._capitalize(dayInWeek).slice(0, 3) + ": "}
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

  renderNotes = () => {
    if (!this.props.notes) {
      return;
    }

    return (
      <Grid.Row key="back-notes" style={styles.backRow}>
        <Divider style={styles.divider} />
        <Card.Content style={styles.infoCardSection}>
          {this.props.notes}
        </Card.Content>
      </Grid.Row>
    );
  };

  renderLastElement = () => {
    // Hack to make sure button sticks to the bottom of the card
    return <Card.Content key="back-last" style={styles.infoCardLast} />;
  };

  _capitalize = (text) => {
    if (!text || text.length < 1) {
      return;
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  };

  renderBack = () => {
    const views = [];

    if (this.props.phone) {
      views.push(
        <Grid.Row key="back-phone" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            Phone:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderPhoneNumber()}</Grid.Column>
        </Grid.Row>
      );
    }

    if (this.props.address) {
      views.push(
        <Grid.Row key="back-address" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            Address:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderAddress()}</Grid.Column>
        </Grid.Row>
      );
    }

    if (this.props.email) {
      views.push(
        <Grid.Row key="back-email" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            Email:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderEmail()}</Grid.Column>
        </Grid.Row>
      );
    }

    if (this.props.social) {
      views.push(
        <Grid.Row key="back-social" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            Social:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderSocial()}</Grid.Column>
        </Grid.Row>
      );
    }

    if (this.props.hours) {
      views.push(this.renderHours());
    }

    if (this.props.notes) {
      views.push(this.renderNotes());
    }

    views.push(this.renderLastElement());

    return [
      this.renderNameBack(),
      <Card.Content key="back-content" style={styles.backHeader}>
        <Grid>{views}</Grid>
      </Card.Content>,
    ];
  };

  _isOpen = () => {
    const todayDay = moment().format("dddd").toLowerCase();

    if (this.props.hours[todayDay]) {
      const hoursString = this.props.hours[todayDay];

      const openString = hoursString.split("-")[0];
      const closeString = hoursString.split("-")[1];

      const todayOpen = moment(openString, "h:mma");
      const todayClose = moment(closeString, "h:mma");
      return moment().isBetween(todayOpen, todayClose);
    } else {
      return false;
    }
  };

  render = () => (
    <Card style={styles.infoCard}>
      {this.state.side === "front" ? this.renderFront() : this.renderBack()}
      {this.state.side === "front" ? (
        <div className="bottom-button">
          <Button attached="bottom" basic onClick={this.onContactButtonClick}>
            <Icon name="angle right" /> View Details
          </Button>
        </div>
      ) : (
        <div className="bottom-button">
          <Button attached="bottom" basic onClick={this.onCloseButtonClick}>
            <Icon name="angle right" /> See Less
          </Button>
        </div>
      )}
    </Card>
  );
}

const styles = {
  infoCard: {
    borderRadius: 10,
  },
  infoCardSection: {
    // flexGrow: 0, this styling will cause TypeError
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
