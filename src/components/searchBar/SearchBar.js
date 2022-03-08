import { Input } from 'semantic-ui-react';

function SearchBar(props) {
  return (
    <Input
      fluid
      action={{ icon: 'cancel', onClick: props.onClearSearchText }}
      size='large'
      value={props.searchText}
      placeholder='Search...'
      onChange={props.onSearchTextChange}
    />
  );
}

export default SearchBar;
