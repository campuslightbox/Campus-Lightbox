import React from 'react';
import { Grid, Button, List, Checkbox, Card} from 'semantic-ui-react';
import './Filter.css';

/*
 * Tentative filter list
 * 
 * Location: on campus / off campus / online / hotline - list
 * Type: professional / peer / group / others - list
 * Availability: appointment only / recurring / walk-in
 *
 */

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

var checkboxFilter = {
    location: [],
    type: [],
    availability: [],
}

class FilterGroup extends React.Component {
    capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    createList = () => {
        return this.props.content.map((item) => 
            <List.Item key={item}><Checkbox label={this.capitalize(item)} /></List.Item>
        );
    }

    render = () => (
        <Card>
            <Card.Content>
                <Card.Header>{this.capitalize(this.props.title)}</Card.Header>
            </Card.Content>
            <Card.Content>
                <List verticalAlign='middle'>
                    {this.createList()}
                </List>
            </Card.Content>
        </Card>
    )
}

class Filter extends React.Component {
    createGroups = () => {
        let groups = [];

        for (var category in filterList) {
            if (filterList.hasOwnProperty(category)) {
                groups.push(
                    <Grid.Column>
                        <FilterGroup title={filterList[category].title} content={filterList[category].content}/>
                    </Grid.Column>
                );
            }
        }

        return groups;
    }

    render = () => (
        <Grid columns='equal' stackable>
            {this.createGroups()}
            <Grid.Column>
                <Button content="Clear Filter" primary />
            </Grid.Column>
        </Grid>
    )
}

export default Filter;