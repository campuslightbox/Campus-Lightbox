import React from 'react';
import { Grid, Button, List, Checkbox, Card, Segment } from 'semantic-ui-react';
import './Filter.css';
import _ from 'underscore';

// TODO: move this somewhere else
const filterList = {
    location: {
        title: 'Location',
        content: ['on campus', 'off campus', 'online', 'hotline']
    },
    type: {
        title: 'Type',
        content: ['medical', 'professional', 'peer', 'general awareness']
    },
    availability: {
        title: 'Availability', 
        content: ['appointment only', 'recurring', 'walk-in']
    },
    additionalTags: {
        title: "Additonal Tags",
        content: ['sexual health/assault', 'financial', 'academic']
    }
}

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [],
            type: [],
            availability: [],
            additionalTags: []
        };
    }

    capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    createGroups = () => {
        return _.map(filterList, (val, category) => {
            return (
                <Grid.Row key={val.content} className="filter-row">
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                {this.capitalize(val.title)}
                            </Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <List verticalAlign='middle'>
                                {this.createList(category, val.content)}
                            </List>
                        </Card.Content>
                    </Card>
                </Grid.Row>
            );
        });
    }

    createList = (category, content) => {
        return content.map((item) => {
            // Find if the item is currently selecteds
            let existingItem = _.find(this.state[category], (currItem) => {
                return currItem === item
            });

            return (<List.Item key={item}>
                <Checkbox
                    checked={existingItem ? true : false}
                    onClick={() => this.onFilterClick(category, item)} 
                    label={this.capitalize(item)}
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