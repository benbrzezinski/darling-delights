import { FormEventHandler, useRef } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import ContactPhotos from "../ContactPhotos";
import ContactInfo from "../ContactInfo";
import useValidation from "../../hooks/useValidation";
import scss from "./ContactForm.module.scss";

const ContactForm = () => {
  const ID = useRef({
    name: nanoid(),
    email: nanoid(),
    message: nanoid(),
    toastSuccess: nanoid(),
  });
  const {
    verifyName,
    verifyEmail,
    verifyMessage,
    isNameChecked,
    isEmailChecked,
    isMessageChecked,
  } = useValidation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement;

    if (
      !verifyName(name.value.trim()) ||
      !verifyEmail(email.value.trim()) ||
      !verifyMessage(message.value.trim())
    ) {
      verifyEmail(email.value.trim());
      verifyMessage(message.value.trim());
      return;
    }

    toast.success("Your message has been sent", {
      toastId: ID.current.toastSuccess,
    });

    form.reset();
  };

  return (
    <div className={scss.background}>
      <div className="container">
        <section className={scss.section}>
          <form className={scss.contactForm} onSubmit={handleSubmit}>
            <h1 className={scss.title}>Contact Our Team</h1>
            <div className={scss.contactFormBox}>
              <label className={scss.label} htmlFor={ID.current.name}>
                Your name
              </label>
              <input
                className={scss.input}
                type="text"
                name="name"
                id={ID.current.name}
                placeholder="Full name"
                required
              />
              {isNameChecked && <p className={scss.error}>Invalid name</p>}
            </div>
            <div className={scss.contactFormBox}>
              <label className={scss.label} htmlFor={ID.current.email}>
                Your email
              </label>
              <input
                className={scss.input}
                type="email"
                name="email"
                id={ID.current.email}
                placeholder="example@email.com"
                required
              />
              {isEmailChecked && <p className={scss.error}>Invalid email</p>}
            </div>
            <div className={scss.contactFormBox}>
              <label className={scss.label} htmlFor={ID.current.message}>
                How can we help?
              </label>
              <textarea
                className={`${scss.input} ${scss.textarea}`}
                name="message"
                id={ID.current.message}
                rows={4}
                placeholder="Enter your message here"
                required
              ></textarea>
              {isMessageChecked && (
                <p className={scss.error}>
                  The message must consist of at least 10 words
                </p>
              )}
            </div>
            <button className={scss.submitBtn} type="submit">
              Send my message
            </button>
          </form>
          <ContactPhotos />
        </section>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactForm;
