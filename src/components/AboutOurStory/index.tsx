import { MouseEventHandler } from "react";
import scss from "./AboutOurStory.module.scss";

const AboutOurStory = () => {
  const showControls: MouseEventHandler<HTMLVideoElement> = e => {
    e.currentTarget.setAttribute("controls", "");
  };

  const hideControls: MouseEventHandler<HTMLVideoElement> = e => {
    e.currentTarget.removeAttribute("controls");
  };

  return (
    <div className={`container ${scss.wrapper}`}>
      <section className={scss.heading}>
        <h2 className={scss.title}>Our Story</h2>
        <p className={scss.text}>
          Unveiling the Heart and Heritage of Darling Delights: A Journey of
          Passion, Craftsmanship, and Inspiration - Join us as we share the
          captivating narrative that brought Darling Delights to life and
          continues to shape our commitment to exceptional jewelry
        </p>
      </section>
      <video
        className={scss.video}
        onMouseEnter={showControls}
        onMouseLeave={hideControls}
        controls
        controlsList="nodownload noremoteplayback noplaybackrate"
        poster="/assets/images/video-poster-2.jpg"
      >
        <source src="/assets/videos/our-story.mp4" type="video/mp4" />
        Your browser does not support mp4 videos
      </video>
    </div>
  );
};

export default AboutOurStory;
