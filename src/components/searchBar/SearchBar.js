import React from "react";
import { Input } from "semantic-ui-react";

class SearchBar extends React.Component {
  render = () => (
    <Input
      fluid
      action={{ icon: "cancel", onClick: this.props.onClearSearchText }}
      size="large"
      value={this.props.searchText}
      placeholder="Search..."
      onChange={this.props.onSearchTextChange}
    />
  );
}

export default SearchBar;
