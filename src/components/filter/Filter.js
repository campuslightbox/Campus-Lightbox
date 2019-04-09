import React from 'react';
import { Grid, Button, List, Checkbox, Card, Segment } from 'semantic-ui-react';
import 'components/filter/Filter.css';
import Tags from 'static/Tags';
import _ from 'underscore';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        
        this.filterList = this.transformTagsToFilterList(Tags.getAllTags());
    }

    transformTagsToFilterList(tags) {
        _.each(tags, (val, key) => {
            val["tag"] = key;
        });

        return _.groupBy(_.values(tags), 'category');
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

    getDisplayNameForCategory(category) {
        return (category === "additional") ? "Additional Tags" : this._capitalize(category);
    }

    _capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    createList = (category, items) => {
        return items.map(item => {
            // Find if the item is currently selecteds
            let existingItem = _.find(this.props.filter[category], (currItem) => {
                return currItem === item.tag
            });

            return (<List.Item key={item.tag}>
                <Checkbox
                    checked={existingItem ? true : false}
                    onClick={() => this.props.onFilterChange(category, item.tag)} 
                    label={item.displayName}
                />
            </List.Item>);
        });
    }

    render = () => (
        <Segment basic>
            {this.createGroups()}
            <Grid.Row>
                <Button 
                    onClick={this.props.onClearFilter}
                    content="Clear Filter"
                    primary />
            </Grid.Row>
        </Segment>
    )
}

export default Filter;