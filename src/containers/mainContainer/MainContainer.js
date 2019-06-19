import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

import SearchBar from 'components/searchBar/SearchBar';
import Filter from 'components/filter/Filter';
import CardContainer from 'containers/cardContainer/CardContainer';
import Resources from 'static/Resources';
import MediaQueryHelper from 'static/MediaQueryHelper';

class MainContainer extends React.Component {
    render = () => (
        <Container style={{marginTop: 36}}>
            <div ref={this.props.refProp}></div> 
            <Grid stackable compact="true">
                <Grid.Column width={4}>
                    <MediaQuery query={MediaQueryHelper.MIN_DEVICE_WIDTH_TABLET}>
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
                    </MediaQuery>
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