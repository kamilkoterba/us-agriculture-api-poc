import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video }) => (
    <div className="clear video_item__row">
        <div className="video_item__name">{ video.name }</div>
        <div className="video_item__group">({ video.group })</div>
    </div>
);

export default VideoItem;
