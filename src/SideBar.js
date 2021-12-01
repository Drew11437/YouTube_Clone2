import React from 'react';

const SideBar = (props) => {
    console.log(props);
    let rerenderVideo = props.videos.map((vid) => {
        return (
            <tr>
                <li>{src=<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>  }</li>
                <li>{src=<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>  }</li>
                <li>{src=<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>  }</li>
                <li>{src=<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>  }</li>
                <li>{src=<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>  }</li>
                <li>{src=<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>  }</li>
            </tr>

        );
    });
    return(
        <table>
            <th> Video ID </th>
            {rerenderVideo}
        </table>
    );
}

<div class="video-container">
    <div class="video">
        <img src="img/profile-pic.png" class="thumbnail" alt="">
        <div class="content">
            <img src="img/profile-pic.png" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">youtube clone 2021 | create working youtube clone</h4>
                <p class="channel-name">modern web</p>
            </div>
        </div>
    </div>
</div>

export default SideBar
