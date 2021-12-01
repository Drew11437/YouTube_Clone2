import React, {Component} from "react";

import axios from "axios";
import SideBar from "../src/SideBar"


 

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          videos: []
          
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
             <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe> 
            <SideBar />
          </div>
        
      )
  }

}

    
  export default App;
