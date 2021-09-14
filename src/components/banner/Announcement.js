import { Button, Icon, Segment } from "semantic-ui-react";

import React from "react";

const style = {
  banner: {
    marginBottom: 0,
  },
  button: {
    marginLeft: 8,
  },
};

class Announcement extends React.Component {
  render = () => (
    <Segment inverted textAlign="center" size="small" style={style.banner}>
      {this.props.icon && <Icon {...this.props.icon} />}
      {this.props.text}
      {this.props.button && (
        <Button
          style={style.button}
          compact
          size="small"
          {...this.props.button}
        >
          Join us
        </Button>
      )}
    </Segment>
  );
}

export default Announcement;
