import React from 'react';
import { Grid, Button, List, Checkbox, Card} from 'semantic-ui-react';
import './Filter.css';

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

    createList = (content) => {
        return content.map((item) => 
            <List.Item key={item}>
                <Checkbox label={this.capitalize(item)} />
            </List.Item>
        );
    }

    createGroups = () => {
        let groups = [];

        for (var category in filterList) {
            if (filterList.hasOwnProperty(category)) {
                groups.push(
                    <Grid.Column>
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    {this.capitalize(filterList[category].title)}
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <List verticalAlign='middle'>
                                    {this.createList(filterList[category].content)}
                                </List>
                            </Card.Content>
                        </Card>
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