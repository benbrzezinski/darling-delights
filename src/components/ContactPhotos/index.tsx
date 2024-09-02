import scss from "./ContactPhotos.module.scss";

const ContactPhotos = () => {
  return (
    <div className={scss.photos}>
      <img
        src="/assets/images/contact-1.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="/assets/images/contact-2.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="/assets/images/contact-3.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="/assets/images/contact-4.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="/assets/images/contact-5.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="/assets/images/contact-6.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
    </div>
  );
};

export default ContactPhotos;
