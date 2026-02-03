import "./CardContainer.css";

import { Card, Header, Segment } from "semantic-ui-react";

import Fuse from "fuse.js";
import InfoCard from "components/infoCard/InfoCard";
import React from "react";
import ReactGA from "react-ga";
import Tags from "static/Tags";
import _ from "underscore";

ReactGA.initialize("UA-139413334-1");

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackNoResults: "enabled",
    };
  }

  /**
   * Filters resources based on selected tags.
   *
   * Filtering rules:
   * - OR within the same category (e.g. free OR paid)
   * - AND across different categories (e.g. cost AND accessibility)
   */
  filterResource = (allResources) => {

    /**
     * Remove filter categories that have no selected values.
     * Example:
     * { cost: ["free"], accessibility: [] } -> { cost: ["free"] }
     */
    const activeFilters = _.omit(
      this.props.filter,
      function (filters, category) {
        return filters.length <= 0;
      }
    );

    // No filters applied, return everything
    if (_.isEmpty(activeFilters)) {
      return allResources;
    }

    /**
     * For each category, collect resources that match
     * ANY tag in that category (OR logic).
     */
    let categoryMatches = _.map(activeFilters, (filters) => {
      return _.filter(allResources, (resource) => {
        return _.intersection(resource.tags, filters).length > 0;
      });
    });

    /**
     * Convert each category's matched resources into
     * arrays of resource names for easier intersection.
     */
    const categoryWithNames = _.map(categoryMatches, (category) => {
      return _.map(category, (resource) => {
        return resource.name;
      });
    });

    /**
     * Keep only resource names that appear in ALL categories (AND logic).
     */
    const commonNames = _.intersection(...categoryWithNames);

    /**
     * Return full resource objects that match the final intersection.
     * We can safely use categoryMatches[0] because we know filters exist.
     */
    return _.filter(categoryMatches[0], (resource) => {
      return _.indexOf(commonNames, resource.name) >= 0;
    });
  }; 

  /**
   * Performs fuzzy search on resource name and tag display names.
   * Uses Fuse.js for typo-tolerant matching.
   */
  searchResource = (allResources) => {
    if (!this.props.searchText) {
      return allResources;
    }

    // When searching, search by tag's display name
    const resourcesForSearch = allResources.map((resource) => {
      return _.extend(resource, {
        tagsDisplayNames: resource.tags.map((tag) =>
          Tags.getDisplayNameForTag(tag)
        ),
      });
    });

    const options = {
      keys: ["name", "tagsDisplayNames"],
      threshold: 0.15,
    };
    const fuse = new Fuse(resourcesForSearch, options);
    const tempItems = fuse.search(this.props.searchText);
    const searchedPlaced = tempItems.map((x) => x.item);
    return searchedPlaced;
  };

  /**
   * Apply filters to unpinned resources.
   * Pinned resources are handled separately and always shown.
   */
  render = () => {
    let filteredResources = this.filterResource(this.props.unpinnedResources); // tag search
    filteredResources = this.filterResource(filteredResources) || [];

    const pinnedResources = this.props.pinnedResources || [];
  
    /**
     * Track when users see an empty result state.
     * NOTE: setState in render is generally discouraged,
     * but guarded here to fire only once.
     */
    if (filteredResources.length === 0 && pinnedResources.length === 0) {
      if (this.state.trackNoResults === "enabled") {
        ReactGA.event({
          category: "No Reults",
          action: "No Results Found Based On Filters/Search",
        });
        this.setState({ trackNoResults: "disabled" }); // TODO: this triggers a warning about how setState should not be called in render
      }

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
        {/* Always show pinned */}
        {pinnedResources.map((resource, index) => (
          <InfoCard
            key={`pinned-${index}`}
            {...resource}
            pinned={true}
            onTogglePin={() => this.props.onTogglePin(resource.name)}
          />
        ))}

        {/* Show filtered results (exclude pinned to avoid duplicates) */}
        {filteredResources
          .filter((r) => !this.props.pinned.includes(r.name))
          .map((resource, index) => (
            <InfoCard
              key={`filtered-${index}`}
              {...resource}
              pinned={this.props.pinned.includes(resource.name)}
              onTogglePin={() => this.props.onTogglePin(resource.name)}
            />
          ))}
      </Card.Group>
      </Segment>
    );
  };
}

export default CardContainer;
