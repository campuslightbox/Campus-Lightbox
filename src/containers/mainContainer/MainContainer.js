import "./MainContainer.css";

import { Button, Container, Grid, Segment } from "semantic-ui-react";

import CardContainer from "containers/mainContainer/cardContainer/CardContainer";
import Filter from "components/filter/Filter";
import MediaQuery from "react-responsive";
import MediaQueryHelper from "static/MediaQueryHelper";
import React from "react";
import Resources from "static/Resources";
import SearchBar from "components/searchBar/SearchBar";

const styles = {
  container: {
    marginTop: 36,
  },
  filterButton: {
    marginRight: 16,
  },
};

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterOpen: false,
    };
  }

  openMobileFilter = () => {
    this.setState({ filterOpen: true });
  };

  closeMobileFilter = () => {
    this.setState({ filterOpen: false });
  };

  render = () => (
    <Container style={styles.container}>
      <div ref={this.props.refProp}></div>
      <Grid stackable compact="true">
        <Grid.Column width={4}>
          <MediaQuery minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
            {/* Laptop */}
            <Segment basic>
              <SearchBar
                searchText={this.props.searchText}
                onSearchTextChange={this.props.onSearchTextChange}
                onClearSearchText={this.props.onClearSearchText}
              />
            </Segment>
            <Segment basic>
              <Filter
                filter={this.props.filter}
                onFilterChange={this.props.onFilterChange}
                onClearFilter={this.props.onClearFilter}
              />
            </Segment>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
            {/* Mobile and tablet */}
            <div className="filter-search-container">
              <Filter
                filter={this.props.filter}
                open={this.state.filterOpen}
                onFilterChange={this.props.onFilterChange}
                onClearFilter={this.props.onClearFilter}
                onCloseFilter={this.closeMobileFilter}
              />
              <Button
                style={styles.filterButton}
                color="green"
                icon="options"
                onClick={this.openMobileFilter}
              />
              <div className="mobile-search-bar">
                <SearchBar
                  searchText={this.props.searchText}
                  onSearchTextChange={this.props.onSearchTextChange}
                  onClearSearchText={this.props.onClearSearchText}
                />
              </div>
            </div>
          </MediaQuery>
        </Grid.Column>
        <Grid.Column width={12}>
          <CardContainer
            resources={Resources}
            filter={this.props.filter}
            searchText={this.props.searchText}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default MainContainer;
