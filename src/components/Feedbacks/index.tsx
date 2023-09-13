import { Carousel } from "react-responsive-carousel";
import feedbacks from "../../db/fake-feedbacks";
import scss from "./Feedbacks.module.scss";

const Feedbacks = () => {
  return (
    <div className={scss.background}>
      <div className={scss.wrapper}>
        <section className={scss.headline}>
          <h2 className={scss.title}>From the people</h2>
          <p className={scss.text}>
            We love hearing from our customers! You are the reason we are here
            and the reason we do what we do.
          </p>
        </section>
        <Carousel
          showThumbs={false}
          showStatus={false}
          className={scss.feedbackBox}
        >
          {feedbacks.map(({ id, author, country, img, text }) => (
            <div className={scss.feedback} key={id}>
              <img
                src={img}
                alt={author}
                className={scss.feedbackImg}
                loading="lazy"
              />
              <div className={scss.feedbackInfo}>
                <p className={scss.feedbackText}>{text}</p>
                <p className={scss.feedbackAuthor}>{author}</p>
                <p className={scss.feedbackCountry}>{country}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedbacks;
