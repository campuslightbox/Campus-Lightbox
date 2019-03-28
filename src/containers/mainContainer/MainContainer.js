import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Filter from 'components/filter/Filter';
import CardContainer from 'containers/cardContainer/CardContainer';

import 'containers/mainContainer/MainContainer.css';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {}
        };

        // Load resources
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
                    <CardContainer filter={this.state.filter}/>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default MainContainer;