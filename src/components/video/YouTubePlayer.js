// components/YouTubePlayer.js
import React from "react";

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="relative w-full overflow-hidden pb-[56.25%]">
      {/* 16:9 Aspect Ratio */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`${videoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
