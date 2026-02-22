import { MouseEventHandler } from "react";
import scss from "./OurStory.module.scss";

const OurStory = () => {
  const showControls: MouseEventHandler<HTMLVideoElement> = e => {
    e.currentTarget.setAttribute("controls", "");
  };

  const hideControls: MouseEventHandler<HTMLVideoElement> = e => {
    e.currentTarget.removeAttribute("controls");
  };

  return (
    <div className={scss.background}>
      <div className={`container ${scss.wrapper}`}>
        <h2 className={scss.title}>Our Story</h2>
        <video
          className={scss.video}
          onMouseOver={showControls}
          onMouseLeave={hideControls}
          controls
          controlsList="nodownload noremoteplayback noplaybackrate"
          poster="/assets/images/video-poster-1.jpg"
          preload="none"
          playsInline
        >
          <source src="/assets/videos/our-story.mp4" type="video/mp4" />
          Your browser does not support mp4 videos
        </video>
      </div>
    </div>
  );
};

export default OurStory;
