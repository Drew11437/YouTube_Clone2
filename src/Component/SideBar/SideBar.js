import React from 'react';



 const SideBar = ({videos, handleVideoSelect}) => {
    //  const renderedVideos = videos.map((video)=>{
    //      return < key VideoItem = {video.id.videoId} video={video}
    //      handleVideoSelect={handleVideoSelect}/>
    //  });
        return <div className = 'ui relaxed divided list'>{videos.map(video=><div><img 
        src ={video.snippet.thumbnails.default.url} width ={video.snippet.thumbnails.default.width} 
        height ={video.snippet.thumbnails.default.height}onClick={()=>{handleVideoSelect(video.id.videoId)}} /></div>)}</div>
 }

 export default SideBar;




//  <div>
//  <iframe title="ytplayer" type="text/html" width="640" height="360"
// src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
// frameborder="0"></iframe>
// </div>