import { Input } from "semantic-ui-react";
import React from "react";

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
