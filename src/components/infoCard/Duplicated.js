import React, { useState } from "react";

// THIS IS A DUPLCIATED WILL  BE DELETEED !!!

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

import FeedbackModal from "components/feedbackModal/FeedbackModal";
import MediaQuery from "react-responsive";
import MediaQueryHelper from "static/MediaQueryHelper";
import ReactGA from "react-ga";
import Tags from "static/Tags";
import _ from "underscore";
import defaultbackground from "./mountains.jpg";
import moment from "moment";

ReactGA.initialize("UA-139413334-1");

function InfoCard2(props) {
  const [side, setSide] = useState("front");

  // destructure props
  const {
    name,
    description,
    background,
    address,
    hours,
    logo,
    phone,
    email,
    notes,
    social,
    tags,
  } = props;

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

  // ok
  const renderTag = (tag) => {
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
  // move to frontCard && rewrite the function
  const renderTodayHours = () => {
    // Check if resource is 24/7
    const isAllDay = tags.includes("allday");
    const isOpen = _isOpen();
    const iconColor = isOpen || isAllDay ? "green" : "red";
    const todayDay = moment().format("dddd").toLowerCase();

    if (isAllDay) {
      return (
        <Card.Meta>
          <Icon name="circle" color={iconColor} />
          Open 24 / 7
        </Card.Meta>
      );
    }

    if (hours[todayDay]) {
      return (
        <Card.Meta>
          <Icon name="circle" color={iconColor} />
          {" " + hours[todayDay]}
        </Card.Meta>
      );
    } else {
      if (!hours.others) {
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

  // REWRITE THIS FUNCTION - do we need an array for minMaxDeviceWidth ??
  // -> FrontInfoCard ?
  // -> BackInfoCard ?
  // extract function to helper function?
  const renderFront = () => {
    return (
      <>
        <MediaQuery
          key="front-mobile-image"
          minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}
        >
          <Image
            src={background || defaultbackground}
            size="medium"
            key="front-image"
            style={styles.infoCardImageMobile}
          />
          {logo && <img className="banner-logo" alt="banner logo" src={logo} />}
        </MediaQuery>
        <Card.Content key="front-content" style={styles.infoCardFrontContent}>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content
          key="front-extra"
          style={styles.infoCardFrontContent}
          extra
        >
          <Card.Meta style={{ marginBottom: 8 }}>
            <div>how many tags total {tags.length}</div>

            {_.map(tags, (tag) => renderTag(tag))}
          </Card.Meta>
          {hours && renderTodayHours()}
        </Card.Content>
      </>
    );
  };

  // -----------------------------------//////-----------------
  // BACK of the card

  const renderNameBack = () => {
    return (
      <Card.Content
        key="back-header"
        style={_.extend(styles.backNameHeader, styles.infoCardSection)}
      >
        <Card.Header>
          {renderReportButton()}
          {name}
        </Card.Header>
      </Card.Content>
    );
  };

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
      {side === "front" ? <FrontCard {...props} /> : renderBack()}
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

// class InfoCard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       side: "front",
//     };
//
//(props, "what is props inside InfoCard");
//   }
//   // below is original code don't modify

//   onContactButtonClick = () => {
//     ReactGA.event({
//       category: "User",
//       action: "Clicked View Details: " + this.name,
//     });
//     this.setState({ side: "back" });
//   };

//   onCloseButtonClick = () => {
//     this.setState({ side: "front" });
//   };

//   // how to move this function outside this is an array of media query
//   renderFront = () => {
//     return [
//       <MediaQuery
//         key="front-laptop-image"
//         minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}
//       >
//         <Image
//           src={this.background || background}
//           size="medium"
//           key="front-image"
//           style={styles.infoCardImageMobile}
//         />
//         {this.logo && (
//           <img className="banner-logo" alt="logo" src={this.logo} />
//         )}
//       </MediaQuery>,
//       <MediaQuery
//         key="front-mobile-image"
//         maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}
//       >
//         <Image
//           src={this.background || background}
//           size="medium"
//           key="front-image"
//           style={styles.infoCardImageMobile}
//         />
//         {this.logo && (
//           <img className="banner-logo" alt="logo" src={this.logo} />
//         )}
//       </MediaQuery>,
//       <Card.Content key="front-content" style={styles.infoCardFrontContent}>
//         <Card.Header>{this.name}</Card.Header>
//         <Card.Description>{this.description}</Card.Description>
//       </Card.Content>,
//       <Card.Content key="front-extra" style={styles.infoCardFrontContent} extra>
//         <Card.Meta style={{ marginBottom: 8 }}>
//           {_.map(this.tags, (tag) => this.renderTag(tag))}
//         </Card.Meta>
//         {this.hours && this.renderTodayHours()}
//       </Card.Content>,
//     ];
//   };

//   renderTodayHours = () => {
//     // Check if resource is 24/7
//     if (this.tags.indexOf("allday") > -1) {
//       return (
//         <Card.Meta>
//           <Icon name="circle" color="green" />
//           Open 24 / 7
//         </Card.Meta>
//       );
//     }

//     const todayDay = moment().format("dddd").toLowerCase();

//     if (this.hours[todayDay]) {
//       const isOpen = this._isOpen();
//       const iconColor = isOpen ? "green" : "red";

//       return (
//         <Card.Meta>
//           <Icon name="circle" color={iconColor} />
//           {" " + this.hours[todayDay]}
//         </Card.Meta>
//       );
//     } else {
//       if (!this.hours.others) {
//         // Resource does not have alternative hours, so it is closed
//         return (
//           <Card.Meta>
//             <Icon name="circle" color="red" />
//             Closed
//           </Card.Meta>
//         );
//       }
//     }
//   };

//   renderTag = (tag) => {
//     const displayName = Tags.getDisplayNameForTag(tag);
//     const color = Tags.getColorForTag(tag);
//     const Top = Tags.getTopValue(tag);
//     if (Top) {
//       return (
//         <Label
//           as="a"
//           key={displayName}
//           style={_.extend(
//             { backgroundColor: color, borderColor: color },
//             styles.tag
//           )}
//         >
//           {displayName}
//         </Label>
//       );
//     }
//   };

//   renderNameBack = () => {
//     return (
//       <Card.Content
//         key="back-header"
//         style={_.extend(styles.backNameHeader, styles.infoCardSection)}
//       >
//         <Card.Header>
//           {this.renderReportButton()}
//           {this.name}
//         </Card.Header>
//       </Card.Content>
//     );
//   };

//   renderReportButton = () => {
//     return (
//       <div id="report-button">
//         <FeedbackModal
//           trigger={
//             <Button basic icon floated="right" size="small">
//               <Popup
//                 size="tiny"
//                 content="Report incorrect information"
//                 trigger={<Icon name="flag" />}
//               />
//             </Button>
//           }
//           subject={'Inaccurate information regarding "' + this.name + '"'}
//         />
//       </div>
//     );
//   };

//   renderPhoneNumber = () => {
//     const link = "tel://1-" + this.phone;

//     return (
//       <Card.Content key="back-contact" style={styles.infoCardSection}>
//         <Card.Description>
//           <a href={link} target="_blank" rel="noopener noreferrer">
//             {this.phone}
//           </a>
//         </Card.Description>
//       </Card.Content>
//     );
//   };

//   renderAddress = () => {
//     const link = "https://maps.google.com/?q=" + this.address;

//     return (
//       <Card.Content style={styles.infoCardSection}>
//         {this.address && (
//           <Card.Description>
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               {this.address}
//             </a>
//           </Card.Description>
//         )}
//       </Card.Content>
//     );
//   };

//   renderEmail = () => {
//     return (
//       <Card.Content style={styles.infoCardSection}>
//         {this.email && (
//           <a
//             href={"mailto:" + this.email}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {this.email}
//           </a>
//         )}
//       </Card.Content>
//     );
//   };

//   renderSocial = () => {
//     return (
//       <Card.Content key="back-social-email" style={styles.infoCardSection}>
//         <Card.Description>
//           {this.social && this.social.website && (
//             <Button
//               circular
//               color="grey"
//               icon="world"
//               onClick={() => window.open(this.social.website)}
//             />
//           )}
//           {this.social && this.social.facebook && (
//             <Button
//               circular
//               color="facebook"
//               icon="facebook"
//               onClick={() => window.open(this.social.facebook)}
//             />
//           )}
//           {this.social && this.social.instagram && (
//             <Button
//               circular
//               color="instagram"
//               icon="instagram"
//               onClick={() => window.open(this.social.instagram)}
//             />
//           )}
//           {this.social && this.social.twitter && (
//             <Button
//               circular
//               color="twitter"
//               icon="twitter"
//               onClick={() => window.open(this.social.twitter)}
//             />
//           )}
//         </Card.Description>
//       </Card.Content>
//     );
//   };

//   renderHours = () => {
//     if (!this.hours) {
//       return;
//     }

//     const content = [];

//     if (this.hours.others) {
//       content.push(
//         <Card.Description key="others">
//           {this.hours.others}
//         </Card.Description>
//       );
//     } else {
//       const days = [
//         "monday",
//         "tuesday",
//         "wednesday",
//         "thursday",
//         "friday",
//         "saturday",
//         "sunday",
//       ];
//       _.each(days, (dayInWeek, index) => {
//         const hoursForDay = this.hours[dayInWeek];
//         const isToday = index + 1 === moment().isoWeekday();
//         const isOpen = this._isOpen();
//         const iconColor = isOpen ? "green" : "red";

//         content.push(
//           <div key={dayInWeek}>
//             <div style={styles.hoursLabel}>
//               {this._capitalize(dayInWeek).slice(0, 3) + ": "}
//             </div>
//             <div style={styles.hours}>
//               {!hoursForDay ? "Closed" : hoursForDay}
//             </div>
//             <div style={{ display: "inline-block" }}>
//               {isToday && (
//                 <Icon
//                   name="circle"
//                   color={iconColor}
//                   size="small"
//                   style={{ marginLeft: 6 }}
//                 />
//               )}
//             </div>
//           </div>
//         );
//       });
//     }

//     return (
//       <Grid.Row key="back-hours" style={styles.backRow}>
//         <Divider style={styles.divider} />
//         <Card.Content style={styles.infoCardSection}>{content}</Card.Content>
//       </Grid.Row>
//     );
//   };

//   renderNotes = () => {
//     if (!this.notes) {
//       return;
//     }

//     return (
//       <Grid.Row key="back-notes" style={styles.backRow}>
//         <Divider style={styles.divider} />
//         <Card.Content style={styles.infoCardSection}>
//           {this.notes}
//         </Card.Content>
//       </Grid.Row>
//     );
//   };

//   renderLastElement = () => {
//     // Hack to make sure button sticks to the bottom of the card
//     return <Card.Content key="back-last" style={styles.infoCardLast} />;
//   };

//   _capitalize = (text) => {
//     if (!text || text.length < 1) {
//       return;
//     } else {
//       return text.charAt(0).toUpperCase() + text.slice(1);
//     }
//   };

//   renderBack = () => {
//     const views = [];

//     if (this.phone) {
//       views.push(
//         <Grid.Row key="back-phone" style={styles.backRow}>
//           <Grid.Column width={4} style={styles.backLabel}>
//             Phone:
//           </Grid.Column>
//           <Grid.Column width={12}>{this.renderPhoneNumber()}</Grid.Column>
//         </Grid.Row>
//       );
//     }

//     if (this.address) {
//       views.push(
//         <Grid.Row key="back-address" style={styles.backRow}>
//           <Grid.Column width={4} style={styles.backLabel}>
//             Address:
//           </Grid.Column>
//           <Grid.Column width={12}>{this.renderAddress()}</Grid.Column>
//         </Grid.Row>
//       );
//     }

//     if (this.email) {
//       views.push(
//         <Grid.Row key="back-email" style={styles.backRow}>
//           <Grid.Column width={4} style={styles.backLabel}>
//             Email:
//           </Grid.Column>
//           <Grid.Column width={12}>{this.renderEmail()}</Grid.Column>
//         </Grid.Row>
//       );
//     }

//     if (this.social) {
//       views.push(
//         <Grid.Row key="back-social" style={styles.backRow}>
//           <Grid.Column width={4} style={styles.backLabel}>
//             Social:
//           </Grid.Column>
//           <Grid.Column width={12}>{this.renderSocial()}</Grid.Column>
//         </Grid.Row>
//       );
//     }

//     if (this.hours) {
//       views.push(this.renderHours());
//     }

//     if (this.notes) {
//       views.push(this.renderNotes());
//     }

//     views.push(this.renderLastElement());

//     return [
//       this.renderNameBack(),
//       <Card.Content key="back-content" style={styles.backHeader}>
//         <Grid>{views}</Grid>
//       </Card.Content>,
//     ];
//   };

//   _isOpen = () => {
//     const todayDay = moment().format("dddd").toLowerCase();

//     if (this.hours[todayDay]) {
//       const hoursString = this.hours[todayDay];

//       const openString = hoursString.split("-")[0];
//       const closeString = hoursString.split("-")[1];

//       const todayOpen = moment(openString, "h:mma");
//       const todayClose = moment(closeString, "h:mma");
//       return moment().isBetween(todayOpen, todayClose);
//     } else {
//       return false;
//     }
//   };

//   render = () => (
//     <Card style={styles.infoCard}>
//       {this.state.side === "front" ? this.renderFront() : this.renderBack()}
//       {this.state.side === "front" ? (
//         <div className="bottom-button">
//           <Button attached="bottom" basic onClick={this.onContactButtonClick}>
//             <Icon name="angle right" /> View Details
//           </Button>
//         </div>
//       ) : (
//         <div className="bottom-button">
//           <Button attached="bottom" basic onClick={this.onCloseButtonClick}>
//             <Icon name="angle right" /> See Less
//           </Button>
//         </div>
//       )}
//     </Card>
//   );
// }

export const styles = {
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

export default InfoCard2;
