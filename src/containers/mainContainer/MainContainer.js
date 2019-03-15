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
        <Container>
            <Grid stackable>
                <Filter
                    onFilterChange={this.onFilterChange}
                    width={4}
                />
                <CardContainer
                    width={12}
                />
            </Grid>
        </Container>
    )
}

export default MainContainer;