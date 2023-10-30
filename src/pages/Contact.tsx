import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Contact</title>
      </Helmet>
      <ContactForm />
    </>
  );
};

export default Contact;
