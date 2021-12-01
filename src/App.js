import React, {Component} from "react";

import axios from "axios";
import VideoDisplay from "./VideoDisplay"



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          videos: []
          
    };
  }

  componentDidMount(){
    this.getVideos();
    console.log(this.state.videos)
  }

  async getVideos(){
    try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCRdm0OshByuYaD45qs8dso70aMBXtiwRk&maxResults=30&q=StephenASmith&type=video&part=snippet ");
            console.log(response.data);
            this.setState({ videos: response.data, });
          }
     catch (error) {
        console.log(error);
    }

  }

  render() {
    console.log(this.state);
      return (
          <div>
            <h1> Hello! </h1>
            <VideoDisplay videos={this.state.videos} />
          </div>
        
      )
  }

}

    
  export default App;
