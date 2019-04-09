import React, { Fragment } from 'react';
import MainContainer from 'containers/mainContainer/MainContainer';
import Footer from 'components/footer/Footer';
import Header from "./components/header/Header";

import Tags from 'static/Tags';
import _ from 'underscore';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: _.reduce(Tags.getCategories(), (obj, category) => {
                obj[category] = [];
                return obj;
            }, {})
        };
    }

    onFilterChange = (category, item) => {
        // Find if the filter user clicked on is already selected
        let existingItem = _.find(this.state.filter[category], (currItem) => {
            return currItem === item;
        })

        let newState = _.clone(this.state);

        if (existingItem) {
            // Already selected, unselect it
            newState.filter[category] = _.filter(newState.filter[category], (currItem) => {
                return currItem !== existingItem;
            });
        } else {
            // Not selected, select it
            newState.filter[category].push(item);
        }

        this.setState(newState);
    }

    onClearFilter = () => {
        this.setState({filter: _.mapObject(this.state.filter, () => [])});
    }

    onPresetFilterChange = (presetFilter) => {
        // If preset filter is changed, wipe out all filters except the selected one
        const newState = {filter: _.mapObject(this.state.filter, () => [])};
        const tagObj = Tags.getAllTags()[presetFilter];
        newState.filter[tagObj.category].push(presetFilter);

        this.setState(newState);
    }

    render = () => (
        <Fragment>
            <Header onPresetFilterChange={this.onPresetFilterChange}/>
            <MainContainer
                onFilterChange={this.onFilterChange}
                onClearFilter={this.onClearFilter}
                filter={this.state.filter}
            />
            <Footer />
        </Fragment>
    )
}

export default App;
