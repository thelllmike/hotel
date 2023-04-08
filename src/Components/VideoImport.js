import React from 'react';

function VideoPlayer(props) {
  return (
    <video className="video-player" width={props.width} height={props.height} controls>
      <source src={props.src} type={props.type} />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
