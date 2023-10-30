import scss from "./ContactPhotos.module.scss";

const ContactPhotos = () => {
  return (
    <div className={scss.photos}>
      <img
        src="https://i.ibb.co/SRBZ4PP/contact-1.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="https://i.ibb.co/v3p0VYM/contact-2.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="https://i.ibb.co/dmmZPDm/contact-3.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="https://i.ibb.co/McW4Skb/contact-4.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="https://i.ibb.co/dt9BcJj/contact-5.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
      <img
        src="https://i.ibb.co/KNtRHDr/contact-6.jpg"
        alt="jewelry photo"
        className={scss.photo}
        loading="lazy"
      />
    </div>
  );
};

export default ContactPhotos;
