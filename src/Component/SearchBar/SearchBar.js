import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };
  render() {
    return (
      <div class="col-md-6">
        <text for="search" class="form-label">
          Search{" "}
        </text>
        <input type="search" class="form-control" id="input"></input>
        <button> Enter </button>
      </div>
    );
  }
}
export default SearchBar;
