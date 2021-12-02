import React from 'react'



class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    render (){
        return(
            <div class="col-md-6">
           
           
            <label for="search" class="form-label">Search </label>
            <input type="password" class="form-control" id="inputPassword4"></input>
            
          </div>
        )
    }
}
export default SearchBar