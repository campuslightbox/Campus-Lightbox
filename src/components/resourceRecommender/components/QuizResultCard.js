import { Button, Card, Header, Icon, Segment } from "semantic-ui-react";

import InfoCard from "components/infoCard/InfoCard";
import MediaQuery from "react-responsive";
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
    const quizResultTags = quizResult; // the filtered tags from App.js
    var filterResults;
    if (quizResultTags.includes("nopreference")) {
      // we have to separate search because some resources can have walkIn, online, and phone
      let search1 = quizResultTags.slice(0, 4).concat("walkIn");
      let search2 = quizResultTags.slice(0, 4).concat("online");
      let search3 = quizResultTags.slice(0, 4).concat("phone");
      let Match1 = resourceMatch(allResources, search1);
      let Match2 = resourceMatch(allResources, search2);
      let Match3 = resourceMatch(allResources, search3);
      filterResults = _.uniq([...Match1, ...Match2, ...Match3]);
    } else {
      filterResults = resourceMatch(allResources, quizResultTags);
    }
    return filterResults;
  };

  const filterGeneral = (allResources, generalNames) => {
    let out = []
    for (const elem of generalNames) {
      out.push(allResources.filter((r) => r.name === elem)[0])
    }
    return out;
  }

  const filteredData = filterResource(resources);

  const gNames = [
    "UBC Counselling Service",
    "Access and Assessment Center (AAC) at VGH",
    "AMS Peer Support",
    "HeretoHelp",
    "Foundry",
    "Kelty's Key"  
  ];

  const generalRecommendations = filterGeneral(resources, gNames)

  return (
    <>{filteredData.length ? (
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
              {}
            </Card.Group>
          </Segment>
        </MediaQuery>
      </>
    ) : (
      <Segment placeholder>
        <h3 class="ui center aligned header">
          Sorry, we couldn't find any fitting matches.
          <br />          
          <br />
          Here are other general mental health and well-being resources that are accessible for you
          <br />          
          <br />
          💡Tip: You can also use the filter functionality on our homepage to find a better fit.
          
        </h3>
        <Card.Group centered={true}>
            {generalRecommendations.map((resource, index) => {
              return <InfoCard key={index.toString()} {...resource} />
            })}
          </Card.Group>
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
