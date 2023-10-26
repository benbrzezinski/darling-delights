import scss from "./CollectionsHeading.module.scss";

const CollectionsHeadline = () => {
  return (
    <div className={scss.background}>
      <div className={scss.wrapper}>
        <h1 className={scss.headline}>Collections</h1>
        <p className={scss.text}>
          Elevate Your Style with Our Diverse Range of Handcrafted Jewelry
          Collections - Unveil the Artistry, Elegance, and Endless Options
        </p>
      </div>
    </div>
  );
};

export default CollectionsHeadline;
