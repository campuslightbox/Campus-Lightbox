import "components/filter/Filter.css";

import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Header,
  List,
  Modal,
} from "semantic-ui-react";

import Collapsible from "react-collapsible";
import MediaQuery from "react-responsive";
import MediaQueryHelper from "static/MediaQueryHelper";
import React from "react";
import Tags from "static/Tags";
import _ from "underscore";

const styles = {
  filterList: {
    marginTop: 4,
    marginBottom: 4,
    marginRight: 14,
    marginLeft: 0,
  },
  filterHeader: {
    marginBottom: 0,
  },
  filterSection: {
    marginTop: 12,
    marginBottom: 12,
  },
  filterButton: {
    borderRadius: 6,
  },
};

function Filter(props) {
  const filterList = transformTagsToFilterList(Tags.getAllTags());

  function transformTagsToFilterList(tags) {
    _.each(tags, (val, key) => {
      val["tag"] = key;
    });

    return _.groupBy(_.values(tags), "category");
    // group by tags' category value, check underscore.js doc for build-in methods
  }

  function createGroups() {
    return _.map(filterList, (val, category) => {
      return (
        <Grid.Row key={category} className="filter-row">
          <Card>
            <Card.Content>
              <Card.Header>{getDisplayNameForCategory(category)}</Card.Header>
            </Card.Content>
            <Card.Content>{createList(category, val)}</Card.Content>
            <CardContent style={{ border: "none", paddingTop: "0px" }}>
              <Collapsible
                trigger="SHOW MORE ▼"
                triggerWhenOpen="SHOW LESS ▲"
                transitionTime={310}
                triggerStyle={{
                  cursor: "pointer",
                  color: "darkblue",
                  fontWeight: "500",
                }}
              >
                {createSubList(category, val)}
              </Collapsible>
            </CardContent>
          </Card>
        </Grid.Row>
      );
    });
  }

  // rewrite code to make it cleaner
  function getDisplayNameForCategory(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // create sublist for hidden tags
  function createSubList(category, items) {
    return items.map((item) => {
      // Find if the item is currently selected
      let existingItem = _.find(props.filter[category], (currItem) => {
        return currItem === item.tag;
      });

      return (
        <List.Item key={item.tag} style={{ marginTop: "5px" }}>
          {item.show ? (
            ""
          ) : (
            <Checkbox
              checked={existingItem ? true : false}
              onClick={() => props.onFilterChange(category, item.tag)}
              label={item.displayName}
            />
          )}
        </List.Item>
      );
    });
  }

  // main list
  // items = the value object
  function createList(category, items) {
    //console.log(props.filter, "state.filter in app.js");
    //console.log(props.filter[category],"state.filter with category in app.js");
    return items.map((item) => {
      // Find if the item is currently selecteds
      // see App.js (state.filter )
      let existingItem = _.find(props.filter[category], (currItem) => {
        return currItem === item.tag;
      });
      // find return the first matching

      return (
        <List.Item key={item.tag} style={{ marginTop: "5px" }}>
          {item.show ? (
            <Checkbox
              checked={existingItem ? true : false}
              onClick={() => props.onFilterChange(category, item.tag)}
              label={item.displayName}
            />
          ) : (
            ""
          )}
        </List.Item>
      );
    });
  }

  function renderMobileFilter() {
    return (
      <Modal open={props.open} onClose={props.onCloseFilter}>
        <Modal.Header>
          <div className="filter-header">
            <Header as="h2" style={styles.filterHeader}>
              Filters
            </Header>
            <div>
              <button className="control-button" onClick={props.onClearFilter}>
                CLEAR ALL
              </button>
              <button
                className="control-button green"
                onClick={props.onCloseFilter}
              >
                APPLY
              </button>
            </div>
          </div>
        </Modal.Header>
        <Modal.Content>{createMobileGroups()}</Modal.Content>
      </Modal>
    );
  }

  function createMobileGroups() {
    return _.map(filterList, (val, category) => {
      return (
        <div key={category}>
          <h5 className="mobile-group-title">
            {getMobileDisplayNameForCategory(category)}
          </h5>
          <List horizontal style={styles.filterSection}>
            {createMobileList(category, val)}
          </List>
        </div>
      );
    });
  }

  function getMobileDisplayNameForCategory(category) {
    const displayName =
      category === "additional" ? "Additional Tags" : category;
    return displayName.toUpperCase();
  }

  function createMobileList(category, items) {
    return items.map((item) => {
      // Find if the item is currently selected
      let existingItem = _.find(props.filter[category], (currItem) => {
        return currItem === item.tag;
      });

      return (
        <List.Item key={item.tag} style={styles.filterList}>
          <Button
            compact
            toggle
            size="small"
            style={styles.filterButton}
            active={existingItem ? true : false}
            onClick={() => props.onFilterChange(category, item.tag)}
            content={item.displayName}
          />
        </List.Item>
      );
    });
  }

  return (
    <div>
      <MediaQuery minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
        {/* Laptop */}
        {createGroups()}
        <Grid.Row>
          <Button
            onClick={props.onClearFilter}
            content="Clear Filter"
            primary
          />
        </Grid.Row>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
        {/* Mobile and tablet */}
        {renderMobileFilter()}
      </MediaQuery>
    </div>
  );
}

export default Filter;
