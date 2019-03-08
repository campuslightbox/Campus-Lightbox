import React from 'react';
import { Container } from 'semantic-ui-react';
import Filter from '../filter/Filter';
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
            <Filter 
                onFilterChange={this.onFilterChange}
            />
        </Container>
    )
}

export default MainContainer;