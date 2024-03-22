import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Video = (props) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, props);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, [videoNode,player,props]);

  return (
    <div data-vjs-player style={{
        width:'100%',
        height:'500px'
    }}>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};

export default function App() {
  const play = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: process.env.REACT_APP_IPL,
        type: "application/x-mpegURL"
      }
    ]
  };
  return (
    <div className="App">
      <Video {...play} />
    </div>
  );
}
