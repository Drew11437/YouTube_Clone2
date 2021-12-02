import React, {Component} from "react";
//import reactDom from "react-dom";
 import axios from "axios";
import VideoItem from "./Component/VideoItem/VideoItem"
import SideBar from "./Component/SideBar/SideBar";
import SearchBar from "./Component/SearchBar/SearchBar";
 

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          videos: [],
          videoID: "paaR5szOfKU"
          
    };
  }

  componentDidMount(){
    this.fetchVideos();
    console.log(this.state.videos)
  }

  async fetchVideos(){
    try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCRdm0OshByuYaD45qs8dso70aMBXtiwRk&maxResults=30&q=StephenASmith&type=video&part=snippet ");
            console.log(response.data);
            this.setState({ videos: response.data.items });
          }
     catch (error) {
        console.log(error);
    }

  }

  handleVideoSelect = (videoID) => {
    this.setState({videoID: videoID});
  }


  render() {
    console.log(this.state);
      return (
          <div>
             
             { <VideoItem videoID={this.state.videoID} />  }
             {<SideBar videos={this.state.videos} handleVideoSelect ={this.handleVideoSelect} />}
              <SearchBar></SearchBar>
          </div>
        
      )
  }

}


    
  export default App;
