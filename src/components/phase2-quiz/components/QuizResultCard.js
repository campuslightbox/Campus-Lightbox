import React from "react";
import { Header, Segment, Card, Icon, Button } from "semantic-ui-react";
import QuizInfoCard from "./QuizInfoCard";
import _ from "underscore";
import MediaQuery from "react-responsive";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackNoResults: "enabled",
    };
  }

  filterResource = (allResources) => {
    // this.props.quizResult is this.state.result from App.js => the filtered tags
    const quizResultTags = this.props.quizResult;
    let tagsMatches = _.filter(
      allResources,
      (obj) => _.intersection(obj.tags, quizResultTags).length >= 4
    );
    console.log(tagsMatches, "tagsMatches");
    return tagsMatches;
  };

  render = () => {
    let resources = this.filterResource(this.props.resources);

    if (resources.length === 0) {
      return (
        <Segment placeholder>
          <Header icon>
            Sorry, no results found.
            <br />
            <br />
            Try a different search or filters.
          </Header>
        </Segment>
      );
    }

    return (
      <>
        <MediaQuery minWidth={800}>
          <Segment basic>
            <Card.Group style={{ margin: "-.875em 1em 0.5em 6em" }}>
              {_.map(resources, (resource, index) => (
                <QuizInfoCard key={index.toString()} {...resource} /> // spread the props
              ))}
            </Card.Group>
          </Segment>
        </MediaQuery>
        <MediaQuery maxWidth={799}>
          <Segment basic>
            <Card.Group>
              {_.map(resources, (resource, index) => (
                <QuizInfoCard key={index.toString()} {...resource} />
              ))}
            </Card.Group>
          </Segment>
        </MediaQuery>

        {/* <Icon
                  name="arrow left"
                  size="big"
                  
                  disabled={false}
                />
        
        <Button negative>Negative Button</Button> */}

        <div className="parentDiv">
          <div className="leftcol">
            {" "}
            <Icon
              name="arrow left"
              size="big"
              onClick={this.props.backFromResult}
              disabled={false}
            />
          </div>
          <div className="center">
            <Button negative onClick={this.props.resetForm}>
              Start Over
            </Button>
          </div>
          <div className="rightcol"></div>
        </div>
      </>
    );
  };
}

export default CardContainer;
