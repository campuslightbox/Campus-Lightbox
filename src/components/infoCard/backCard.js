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
  const { logo, background, name, description, tags, hours, phone } = props;
  const link = "tel://1-" + phone;
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
        <Card.Content key="back-content" style={styles.backHeader}>
          <Grid>
            <Card.Content key="back-contact" style={styles.infoCardSection}>
              <Card.Description>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {phone}
                </a>
              </Card.Description>
            </Card.Content>
          </Grid>
        </Card.Content>
      </Card.Content>
    </>
  );
};

export default BackCard;
