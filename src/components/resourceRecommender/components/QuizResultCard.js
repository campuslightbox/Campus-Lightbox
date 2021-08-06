import { Button, Card, Header, Icon, Segment } from "semantic-ui-react";

import MediaQuery from "react-responsive";

import InfoCard from "components/infoCard/InfoCard";

import React from "react";
import _ from "underscore";

const CardContainer = ({
  resources,
  resetForm,
  quizResult,
  backFromResult,
}) => {
  const resourceMatch = (resources, searchArr) => {
    if (searchArr.includes("suicidal")) {
      searchArr.push("selfHarm");
    }
    return _.filter(
      resources,
      (obj) => _.intersection(obj.tags, searchArr).length === 5
    );
  };

  const filterResource = (allResources) => {
    var filterResults;
    if (quizResult.includes("nopreference")) {
      let search1 = quizResult.slice(0, 4).concat("walkIn");
      let search2 = quizResult.slice(0, 4).concat("online");
      let Match1 = resourceMatch(allResources, search1);
      let Match2 = resourceMatch(allResources, search2);
      filterResults = _.uniq(Match1.concat(Match2));
    } else {
      filterResults = resourceMatch(allResources, quizResult);
    }
    return filterResults;
  };
  const filteredData = filterResource(resources);

  return (
    <>
      {filteredData.length ? (
        <>
          <MediaQuery minWidth={800}>
            <Segment basic>
              <Card.Group style={{ margin: "-.875em 1em 0.5em 6em" }}>
                {_.map(filteredData, (resource, index) => (
                  <InfoCard key={index.toString()} {...resource} /> // spread the props
                ))}
              </Card.Group>
            </Segment>
          </MediaQuery>
          <MediaQuery maxWidth={799}>
            <Segment basic>
              <Card.Group>
                {_.map(filteredData, (resource, index) => (
                  <InfoCard key={index.toString()} {...resource} />
                ))}
              </Card.Group>
            </Segment>
          </MediaQuery>
        </>
      ) : (
        <Segment placeholder>
          <Header icon>
            Sorry, no results found.
            <br />
            <br />
            Try a different search or filters.
          </Header>
        </Segment>
      )}
      <div className="parentDiv">
        <div className="leftcol">
          {" "}
          <Icon
            name="arrow left"
            size="big"
            onClick={backFromResult}
            disabled={false}
          />
        </div>
        <div className="center">
          <Button negative onClick={resetForm}>
            Start Over
          </Button>
        </div>
        <div className="rightcol"></div>
      </div>
    </>
  );
};

export default CardContainer;
