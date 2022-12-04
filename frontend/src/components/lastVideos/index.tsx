import React from "react";
import VideoProps from "../../types/VideoProps";
import Video from "../video";

export default function LastVideo(props: LastVideoProps) {
    return (
        <div className={props.className}>
            {props.videos.map((video) => (
                <Video {...video} key={video.id} className="w-5/12 mt-10"/>
            ))}
        </div>
    )
}

interface LastVideoProps {
    videos: VideoProps[];
    className?: string;
}