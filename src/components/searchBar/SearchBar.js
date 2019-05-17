import React from 'react';
import { Input, Segment } from 'semantic-ui-react';

class SearchBar extends React.Component {
    render = () => (
        <Segment basic>
            <Input 
                fluid
                action={{icon: 'cancel', onClick: this.props.onClearSearchText}}
                size='large'
                value={this.props.searchText}
                placeholder='Search...'
                onChange={this.props.onSearchTextChange}
            />
        </Segment>
    )
}

export default SearchBar;