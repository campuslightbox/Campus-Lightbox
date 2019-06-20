import React from 'react';
import { Input, Segment } from 'semantic-ui-react';

class SearchBar extends React.Component {
    renderContent = () => (
        <Input 
            fluid
            action={{icon: 'cancel', onClick: this.props.onClearSearchText}}
            size='large'
            value={this.props.searchText}
            placeholder='Search...'
            onChange={this.props.onSearchTextChange}
        />
    )

    render = () => {
        if (this.props.inline) {
            return this.renderContent()
        } else {
            return <Segment basic>{this.renderContent()}</Segment>
        }
    }
}

export default SearchBar;