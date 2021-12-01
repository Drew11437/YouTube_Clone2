import React from 'react';


const VideoDisplay = (props) => {
    console.log(props);
    let rerenderVideo = props.videos.map((vid) => {
        return (
            <tr>
                <td>{vid.videoId}</td>
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

export default VideoDisplay
