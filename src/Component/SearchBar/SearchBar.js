import React from 'react'
import "./SearchBar.css"


class SearchBar extends React.Component {
    state = {
        searchTerm: "paaR5szOfKU"
    };
    handleChange = (event) => {
        this.setState({
        searchTerm: event.target.value
        });

    }
        handleSubmit = event => {
        event.preventDefault();
        this.props.newVideo(this.state.searchTerm);

    }

    render (){
        return(
            <div class="col-md-6">
               <form onSubmit={this.handleSubmit}> 
           
            <label for="search" class="form-label">Search </label>
            <input type="text" placeholder ="search..."onChange={this.handleChange}/>
            </form>
          </div>
        )
    }

    
}


export default SearchBar;
