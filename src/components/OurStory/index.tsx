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
      <div className={scss.wrapper}>
        <h2 className={scss.title}>Our Story</h2>
        <video
          className={scss.video}
          onMouseEnter={showControls}
          onMouseLeave={hideControls}
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          poster="/assets/images/video-poster.jpg"
        >
          <source src="/assets/videos/our-story.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default OurStory;
