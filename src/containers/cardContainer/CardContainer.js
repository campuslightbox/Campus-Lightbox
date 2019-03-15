import React from 'react';
import { Container, Grid, Card, Label } from 'semantic-ui-react';
import './CardContainer.css';

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => (
        <Grid.Column width={this.props.width}>
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Label>Title</Label>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <p>A long long long paragraph goes here</p>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default CardContainer;