import React from "react";
import { Header, Segment, Card } from "semantic-ui-react";
import QuizInfoCard from "./QuizInfoCard";
import _ from "underscore";

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
      <Segment basic>
        <Card.Group>
          {_.map(resources, (resource, index) => (
            <QuizInfoCard key={index.toString()} {...resource} /> // spread each found resource to infoCard for display
          ))}
        </Card.Group>
      </Segment>
    );
  };
}

export default CardContainer;
