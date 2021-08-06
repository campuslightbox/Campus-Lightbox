import React, { Fragment } from 'react';

import Footer from 'components/footer/Footer';
import Header from './components/header/Header';
import MainContainer from 'containers/mainContainer/MainContainer';
import ReactGA from 'react-ga';
import Tags from 'static/Tags';
import _ from 'underscore';

ReactGA.initialize('UA-139413334-1');
ReactGA.pageview('Homepage');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: _.reduce(
        Tags.getCategories(),
        (obj, category) => {
          obj[category] = [];
          return obj;
        },
        {}
      ),
      searchText: '',
      trackSearch: 'enabled'
    };
    this.resourcesRef = React.createRef(); // Create a ref object
  }

  onFilterChange = (category, item) => {
    // Find if the filter user clicked on is already selected
    let existingItem = _.find(this.state.filter[category], (currItem) => {
      return currItem === item;
    });

    let newState = _.clone(this.state);

    if (existingItem) {
      // Already selected, unselect it
      newState.filter[category] = _.filter(
        newState.filter[category],
        (currItem) => {
          return currItem !== existingItem;
        }
      );
    } else {
      // Not selected, select it
      ReactGA.event({
        category: 'Filters',
        action: 'Clicked On Filter: ' + item
      });
      newState.filter[category].push(item);
    }

    this.setState(newState);
  };

  onClearFilter = () => {
    this.setState({ filter: _.mapObject(this.state.filter, () => []) });
  };

  searchTrackGA = () => {
    ReactGA.event({
      category: 'Search',
      action: 'Used Search Bar'
    });
  };

  onSearchTextChange = (_, data) => {
    if (this.state.trackSearch === 'enabled') {
      this.searchTrackGA();
    }
    this.setState({ trackSearch: 'disabled' });

    this.setState({ searchText: data.value });
  };

  onClearSearchText = () => {
    this.setState({ searchText: '' });
  };

  onPresetFilterChange = (presetFilter) => {
    // If preset filter is changed, wipe out all filters except the selected one
    const newState = { filter: _.mapObject(this.state.filter, () => []) };
    const tagObj = Tags.getAllTags()[presetFilter];
    newState.filter[tagObj.category].push(presetFilter);

    this.setState(newState);
  };

  scrollToContent = () => {
    this.resourcesRef.current.scrollIntoView();
  };

  render = () => (
    <Fragment>
      <Header
        onPresetFilterChange={this.onPresetFilterChange}
        scrollToContent={this.scrollToContent}
        refProp={this.resourcesRef}
      />
      <MainContainer
        onSearchTextChange={this.onSearchTextChange}
        onClearSearchText={this.onClearSearchText}
        onFilterChange={this.onFilterChange}
        onClearFilter={this.onClearFilter}
        filter={this.state.filter}
        searchText={this.state.searchText}
        refProp={this.resourcesRef}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
