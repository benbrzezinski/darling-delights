import scss from "./Designers.module.scss";

const Designers = () => {
  return (
    <div className={`container ${scss.wrapper}`}>
      <h2 className={scss.title}>Designers at Darling.</h2>
      <ul className={scss.designers}>
        <li className={scss.designer}>
          <img
            src="https://i.ibb.co/N6nCt90/designer-1.jpg"
            alt="designer Joseph Anderson"
            width={360}
            className={scss.designerImg}
            loading="lazy"
          />
          <div className={scss.nameBox}>
            <p className={scss.name}>Joseph Anderson</p>
          </div>
        </li>
        <li className={scss.designer}>
          <img
            src="https://i.ibb.co/f2ZRc4R/designer-2.jpg"
            alt="designer Jennifer Robinson"
            width={360}
            className={scss.designerImg}
            loading="lazy"
          />
          <div className={scss.nameBox}>
            <p className={scss.name}>Jennifer Robinson</p>
          </div>
        </li>
        <li className={scss.designer}>
          <img
            src="https://i.ibb.co/CVxBXDV/designer-3.jpg"
            alt="designer Erica Serrano"
            width={360}
            className={scss.designerImg}
            loading="lazy"
          />
          <div className={scss.nameBox}>
            <p className={scss.name}>Erica Serrano</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Designers;
