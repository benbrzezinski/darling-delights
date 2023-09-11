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
          <source
            src="https://www.dropbox.com/scl/fi/6k1caews3e2y5dgii3ytg/our-story.mp4?rlkey=qf22l1rjmcs1mow23uteht6vg&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default OurStory;
