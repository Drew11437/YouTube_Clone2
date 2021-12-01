import React, {Component} from "react";
//import reactDom from "react-dom";
 import axios from "axios";
import VideoItem from "./Component/VideoItem/VideoItem"
import SideBar from "./Component/SideBar/SideBar";

 

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
            this.setState({ videos: response.data });
          }
     catch (error) {
        console.log(error);
    }

  }

  render() {
    console.log(this.state);
      return (
          <div>
             
             { <VideoItem />  }
             {<SideBar videos={this.state.videos}/>}
          </div>
        
      )
  }

}

    
  export default App;
