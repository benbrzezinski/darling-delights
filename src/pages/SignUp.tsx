import { Helmet } from "react-helmet-async";
import SignForm from "../components/SignForm";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Sign Up</title>
        <meta
          name="description"
          content="Create a Darling Delights account to access exclusive offers, track orders, and customize your jewelry preferences."
        ></meta>
      </Helmet>
      <SignForm type="register" />
    </>
  );
};

export default SignUp;
