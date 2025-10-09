import React, { Fragment } from "react";
import Footer from "components/footer/Footer";
import Header from "./components/header/Header";
import MainContainer from "containers/mainContainer/MainContainer";
import ReactGA from "react-ga";
import Tags from "static/Tags";
import _ from "underscore";

ReactGA.initialize("UA-139413334-1");
ReactGA.pageview("Homepage");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: _.reduce(Tags.getCategories(), (obj, category) => {
        obj[category] = [];
        return obj;
      }, {}),
      searchText: "",
      trackSearch: "enabled",
      savedTheme: false 
    };

    this.resourcesRef = React.createRef();
  }

  componentDidMount() {
    const savedFilter = localStorage.getItem("filter");
    const savedSearchText = localStorage.getItem("searchText");
    const savedTheme = localStorage.getItem("savedTheme");

    if (savedFilter) this.setState({ filter: JSON.parse(savedFilter) });
    if (savedSearchText) this.setState({ searchText: savedSearchText });

    if (savedTheme) {
      const savedThemeValue = JSON.parse(savedTheme);
      this.setState({ savedTheme: savedThemeValue }, () => {
        document.body.classList.toggle("dark", this.state.savedTheme);
        document.body.classList.toggle("light", !this.state.savedTheme);
      });
    } else {
      document.body.classList.add("light");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevState.filter, this.state.filter)) {
      localStorage.setItem("filter", JSON.stringify(this.state.filter));
    }
    if (prevState.searchText !== this.state.searchText) {
      localStorage.setItem("searchText", this.state.searchText);
    }
    if (prevState.savedTheme !== this.state.savedTheme) {
      localStorage.setItem("savedTheme", JSON.stringify(this.state.savedTheme));
      document.body.classList.toggle("dark", this.state.savedTheme);
      document.body.classList.toggle("light", !this.state.savedTheme);
    }
  }

  onFilterChange = (category, item) => {
    this.setState((prevState) => {
      const newFilter = _.mapObject(prevState.filter, (arr) => [...arr]);
      const existingItem = newFilter[category].includes(item);

      if (existingItem) {
        newFilter[category] = newFilter[category].filter((currItem) => currItem !== item);
      } else {
        ReactGA.event({
          category: "Filters",
          action: "Clicked On Filter: " + item,
        });
        newFilter[category].push(item);
      }

      return { filter: newFilter };
    });
  };

  onClearFilter = () => {
    this.setState((prevState) => ({
      filter: _.mapObject(prevState.filter, () => []),
    }));
  };

  searchTrackGA = () => {
    ReactGA.event({
      category: "Search",
      action: "Used Search Bar",
    });
  };

  onSearchTextChange = (_, data) => {
    if (this.state.trackSearch === "enabled") this.searchTrackGA();

    this.setState({ trackSearch: "disabled", searchText: data.value });
  };

  onClearSearchText = () => this.setState({ searchText: "" });

  onPresetFilterChange = (presetFilter) => {
    const tagObj = Tags.getAllTags()[presetFilter];
    const newFilter = _.mapObject(this.state.filter, () => []);
    newFilter[tagObj.category].push(presetFilter);
    this.setState({ filter: newFilter });
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ savedTheme: !prevState.savedTheme }));
  };

  scrollToContent = () => this.resourcesRef.current.scrollIntoView();

  render = () => (
    <Fragment>
      <Header
        onPresetFilterChange={this.onPresetFilterChange}
        scrollToContent={this.scrollToContent}
        refProp={this.resourcesRef}
        savedTheme={this.state.savedTheme}
        onToggleDarkMode={this.toggleDarkMode}
      />
      <MainContainer
        onSearchTextChange={this.onSearchTextChange}
        onClearSearchText={this.onClearSearchText}
        onFilterChange={this.onFilterChange}
        onClearFilter={this.onClearFilter}
        filter={this.state.filter}
        searchText={this.state.searchText}
        refProp={this.resourcesRef}
        savedTheme={this.state.savedTheme}
        toggleDarkMode={this.toggleDarkMode}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
