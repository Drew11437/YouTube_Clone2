import React from 'react';



 const SideBar = ({videos, handleVideoSelect}) => {
    //  const renderedVideos = videos.map((video)=>{
    //      return < key VideoItem = {video.id.videoId} video={video}
    //      handleVideoSelect={handleVideoSelect}/>
    //  });
     return <div className = 'ui relaxed divided list'>{videos.map(video=><div><img src ={video.snippet.thumbnails.default.url} width ={video.snippet.thumbnails.default.width} height ={video.snippet.thumbnails.default.height} /></div>)}</div>
 }

 export default SideBar;