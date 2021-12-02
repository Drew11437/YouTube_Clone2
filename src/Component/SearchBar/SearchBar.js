import React from 'react'
import "./SearchBar.css"


class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    render (){
        return(
            <div class="col-md-6">
           
           
            <label for="search" class="form-label">Search </label>
            <input type="search" class="form-control" id="input"></input>
            
          </div>
        )
    }
}
export default SearchBar;