import React from 'react';
import { Grid, Button, List, Checkbox, Card, Segment } from 'semantic-ui-react';
import 'components/filter/Filter.css';
import Tags from 'static/Tags';
import _ from 'underscore';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        
        this.filterList = this.transformTagsToFilterList(Tags.getAllTags());

        this.state = _.reduce(Tags.getCategories(), (obj, category) => {
            obj[category] = [];
            return obj;
        }, {});
    }

    transformTagsToFilterList(tags) {
        _.each(tags, (val, key) => {
            val["tag"] = key;
        });

        return _.groupBy(_.values(tags), 'category');
    }

    getDisplayNameForCategory(category) {
        return (category === "additional") ? "Additional Tags" : this.capitalize(category);
    }

    capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    createGroups = () => {
        return _.map(this.filterList, (val, category) => {
            return (
                <Grid.Row key={category} className="filter-row">
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                {this.getDisplayNameForCategory(category)}
                            </Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <List verticalAlign='middle'>
                                {this.createList(category, val)}
                            </List>
                        </Card.Content>
                    </Card>
                </Grid.Row>
            );
        });
    }

    createList = (category, items) => {
        return items.map(item => {
            // Find if the item is currently selecteds
            let existingItem = _.find(this.state[category], (currItem) => {
                return currItem === item.tag
            });

            return (<List.Item key={item.tag}>
                <Checkbox
                    checked={existingItem ? true : false}
                    onClick={() => this.onFilterClick(category, item.tag)} 
                    label={item.displayName}
                />
            </List.Item>);
        });
    }

    onFilterClick = (category, item) => {
        // Find if the filter user clicked on is already selected
        let existingItem = _.find(this.state[category], (currItem) => {
            return currItem === item;
        })

        let newState = _.clone(this.state);

        if (existingItem) {
            // Already selected, unselect it
            newState[category] = _.filter(newState[category], (currItem) => {
                return currItem !== existingItem;
            });
        } else {
            // Not selected, select it
            newState[category].push(item);
        }

        this.setState(newState);
        this.props.onFilterChange(newState);
    }

    onClearFilter = () => {
        let newState = _.mapObject(this.state, () => []);
        
        this.setState(newState);
        this.props.onFilterChange(newState);
    }

    render = () => (
        <Segment basic>
            {this.createGroups()}
            <Grid.Row>
                <Button 
                    onClick={this.onClearFilter}
                    content="Clear Filter"
                    primary />
            </Grid.Row>
        </Segment>
    )
}

export default Filter;