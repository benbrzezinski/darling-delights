import scss from "./DesignProcess.module.scss";

const DesignProcess = () => {
  return (
    <div className={scss.wrapper}>
      <section className={scss.heading}>
        <h2 className={scss.title}>
          Step By Step Design Process For Every Piece
        </h2>
        <p className={scss.text}>
          Crafting Perfection, One Step at a Time: The Fascinating Journey of
          Our Artisanal Design Process - We invite you to delve into the
          intricacies of our creative journey, where each piece comes to life
          through a meticulous, step-by-step process. From the spark of
          inspiration to the final masterpiece, witness the dedication, passion,
          and artistry that infuse every single jewel with a story of its own.
          We believe that this level of commitment is what makes each piece
          truly exceptional
        </p>
      </section>
      <div className={scss.images}>
        <div className={scss.imgFirst}></div>
        <div className={scss.imgSec}></div>
      </div>
    </div>
  );
};

export default DesignProcess;
