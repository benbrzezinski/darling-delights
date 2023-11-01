import { useRef, FormEventHandler } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import ContactPhotos from "../ContactPhotos";
import ContactInfo from "../ContactInfo";
import useValidation from "../../hooks/useValidation";
import scss from "./ContactForm.module.scss";

const ContactForm = () => {
  const {
    verifyName,
    verifyEmail,
    verifyMessage,
    isNameChecked,
    isEmailChecked,
    isMessageChecked,
  } = useValidation();

  const nameID = useRef(nanoid());
  const emailID = useRef(nanoid());
  const messageID = useRef(nanoid());

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

    toast.success("Your message has been sent");
    form.reset();
  };

  return (
    <div className={scss.background}>
      <div className={scss.wrapper}>
        <section className={scss.section}>
          <form className={scss.contactForm} onSubmit={handleSubmit}>
            <h1 className={scss.title}>Contact Our Team</h1>
            <div className={scss.contactFormBox}>
              <label className={scss.label} htmlFor={nameID.current}>
                Your name
              </label>
              <input
                className={scss.input}
                type="text"
                name="name"
                id={nameID.current}
                placeholder="Full name"
                required
              />
              {isNameChecked && <p className={scss.error}>Invalid name</p>}
            </div>
            <div className={scss.contactFormBox}>
              <label className={scss.label} htmlFor={emailID.current}>
                Your email
              </label>
              <input
                className={scss.input}
                type="email"
                name="email"
                id={emailID.current}
                placeholder="yourmail@emaily.com"
                required
              />
              {isEmailChecked && <p className={scss.error}>Invalid email</p>}
            </div>
            <div className={scss.contactFormBox}>
              <label className={scss.label} htmlFor={messageID.current}>
                How can we help?
              </label>
              <textarea
                className={`${scss.input} ${scss.textarea}`}
                name="message"
                id={messageID.current}
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
