import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Contact</title>
        <meta
          name="description"
          content="Get in touch with Darling Delights - contact us for inquiries, personalized jewelry advice, or visit our shop."
        ></meta>
      </Helmet>
      <ContactForm />
    </>
  );
};

export default Contact;
