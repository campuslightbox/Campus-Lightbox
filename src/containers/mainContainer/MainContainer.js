import React from 'react';
import { Container, Grid, Card, Label, Divider } from 'semantic-ui-react';
import Filter from '../../components/filter/Filter';
import CardContainer from '../cardContainer/CardContainer';

import './MainContainer.css';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {}
        };
    }

    onFilterChange = (newFilter) => {
        this.setState({
            filter: newFilter
        });
    }

    render = () => (
        <Container style={{marginTop: 36}}>
            <Grid stackable compact>
                <Grid.Column width={4}>
                    <Filter
                        onFilterChange={this.onFilterChange}
                    />
                </Grid.Column>
                <Grid.Column width={12}>
                    <CardContainer />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default MainContainer;