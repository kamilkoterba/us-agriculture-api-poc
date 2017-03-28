import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => (
    <div className="container-m">
        { videos.map((video) =>
            <VideoItem
                key={ video.ndbno }
                video={ video }
                onVideoSelect={ onVideoSelect }
            />
        ) }
    </div>
);

export default VideoList;