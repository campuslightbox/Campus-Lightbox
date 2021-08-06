import { Input } from "semantic-ui-react";

function SearchBar(props) {
  return (
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
