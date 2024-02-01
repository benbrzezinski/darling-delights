import scss from "./AboutHeading.module.scss";

const AboutHeading = () => {
  return (
    <div className={scss.background}>
      <div className={`container ${scss.wrapper}`}>
        <section className={scss.heading}>
          <h1 className={scss.title}>About us</h1>
        </section>
        <div className={scss.images}>
          <div className={scss.imgFirst}></div>
          <div className={scss.imgSec}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeading;
