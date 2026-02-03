// MainContainer.js
import "./MainContainer.css";
import { Button, Container, Grid, Segment } from "semantic-ui-react";
import React, { useState, useEffect, useMemo } from "react";
import MediaQuery from "react-responsive";
import MediaQueryHelper from "static/MediaQueryHelper";

import CardContainer from "containers/cardContainer/CardContainer";
import Filter from "components/filter/Filter";
import SearchBar from "components/searchBar/SearchBar";
import Resources from "static/Resources";

/**
 * Small presentational component for toggling light/dark mode.
 * Kept separate to avoid cluttering MainContainer logic.
 */
function BackgroundTheme({ savedTheme, toggleDarkMode }) {
  return (
    <Button
      circular
      toggle
      color="grey"
      size="small"
      style={styles.filterButton}
      onClick={toggleDarkMode}
    >
      Switch to {savedTheme ? "Light" : "Dark"} Mode
    </Button>
  );
}

const styles = {
  container: { marginTop: 36 },
  filterButton: { marginRight: 16 },
};

export default function MainContainer(props) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [pinned, setPinned] = useState([]);

  /**
   * Load pinned resources from localStorage once on mount.
   * Wrapped in try/catch to safely handle malformed JSON.
   */
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("pinnedResources")) || [];
      setPinned(saved);
    } catch (e) {
      setPinned([]);
    }
  }, []);

  // Save pins to localStorage whenever pinned changes
  useEffect(() => {
    localStorage.setItem("pinnedResources", JSON.stringify(pinned));
  }, [pinned]);

  // Toggle pin/unpin by resource name
  const togglePin = (name) => {
    setPinned((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  /**
   * Split resources into pinned and unpinned groups.
   * useMemo prevents unnecessary recomputation on re-renders.
   */
  const sortedResources = useMemo(() => {
      const pinnedResources = Resources.filter((r) => pinned.includes(r.name));
      const unpinnedResources = Resources.filter((r) => !pinned.includes(r.name));
  
      return {pinnedResources, unpinnedResources};
    }, [pinned]);

  return (
    <Container style={styles.container}>
      {/* change from this.props.refProp to props.refProp */}
      <div ref={props.refProp}></div>

      <Grid stackable compact="true">
        <Grid.Column width={4}>
          {/* Desktop layout */}
          <MediaQuery minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
            <Segment basic>
              <BackgroundTheme
                savedTheme={props.savedTheme}
                toggleDarkMode={props.toggleDarkMode}
              />
              <div className="ui hidden divider" />
              <SearchBar
                searchText={props.searchText}
                onSearchTextChange={props.onSearchTextChange}
                onClearSearchText={props.onClearSearchText}
              />
            </Segment>

            <Segment basic>
              <Filter
                filter={props.filter}
                onFilterChange={props.onFilterChange}
                onClearFilter={props.onClearFilter}
              />
            </Segment>
          </MediaQuery>

          {/* Mobile layout */}
          <MediaQuery maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
            <div className="filter-search-container">

              {/* Dark mode for mobile */}
              <div>
                <BackgroundTheme
                  savedTheme={props.savedTheme}
                  toggleDarkMode={props.toggleDarkMode}
                />
              </div>

              {/* Filter rendered as an overlay/panel on mobile */}
              <Filter
                filter={props.filter}
                open={filterOpen}
                onFilterChange={props.onFilterChange}
                onClearFilter={props.onClearFilter}
                onCloseFilter={() => setFilterOpen(false)}
              />

              {/* Button that opens the mobile filter panel */}
              <Button
                style={styles.filterButton}
                color="green"
                icon="options"
                onClick={() => setFilterOpen(true)}
              />
              <div className="mobile-search-bar">
                <SearchBar
                  searchText={props.searchText}
                  onSearchTextChange={props.onSearchTextChange}
                  onClearSearchText={props.onClearSearchText}
                />
              </div>
            </div>
          </MediaQuery>
        </Grid.Column>

        <Grid.Column width={12}>
          {/* IMPORTANT: pass sortedResources, pinned array, and toggle function */}
          <CardContainer
            pinnedResources={sortedResources.pinnedResources}
            unpinnedResources={sortedResources.unpinnedResources}
            filter={props.filter}
            searchText={props.searchText}
            pinned={pinned}
            onTogglePin={togglePin}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
