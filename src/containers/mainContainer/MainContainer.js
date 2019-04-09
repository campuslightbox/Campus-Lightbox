import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Filter from 'components/filter/Filter';
import CardContainer from 'containers/cardContainer/CardContainer';
import Resources from 'static/Resources';

import 'containers/mainContainer/MainContainer.css';

class MainContainer extends React.Component {
    render = () => (
        <Container style={{marginTop: 36}}>
            <Grid stackable compact="true">
                <Grid.Column width={4}>
                    <Filter
                        filter={this.props.filter}
                        onFilterChange={this.props.onFilterChange}
                        onClearFilter={this.props.onClearFilter}
                    />
                </Grid.Column>
                <Grid.Column width={12}>
                    <CardContainer resources={Resources} filter={this.props.filter}/>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default MainContainer;