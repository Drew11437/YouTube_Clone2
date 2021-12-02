import React  from "react";




export const VideoItem = (props) => {
    var url = `https://www.youtube.com/embed/${props.videoID}?autoplay=1&origin=http://example.com`
    return (
        <div>
             <iframe title="ytplayer" type="text/html" width="640" height="360"
  src= {url}
  frameborder="0"></iframe>
        </div>
    )
}
 


export default VideoItem; 