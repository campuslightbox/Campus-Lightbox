import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SearchBar from 'components/searchBar/SearchBar';
import Filter from 'components/filter/Filter';
import CardContainer from 'containers/cardContainer/CardContainer';
import Resources from 'static/Resources';

import 'containers/mainContainer/MainContainer.css';

class MainContainer extends React.Component {
    render = () => (
        <Container style={{marginTop: 36}}>
            <div ref={this.props.refProp}></div> 
            <Grid stackable compact="true">
                <Grid.Column width={4}>
                    <SearchBar
                        searchText={this.props.searchText}
                        onSearchTextChange={this.props.onSearchTextChange}
                        onClearSearchText={this.props.onClearSearchText}
                    />
                    <Filter
                        filter={this.props.filter}
                        onFilterChange={this.props.onFilterChange}
                        onClearFilter={this.props.onClearFilter}
                    />
                </Grid.Column>
                <Grid.Column width={12}>
                    <CardContainer
                        resources={Resources}
                        filter={this.props.filter}
                        searchText={this.props.searchText}
                    />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default MainContainer;