import { Helmet } from "react-helmet-async";
import SignForm from "../components/SignForm";

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Sign In</title>
        <meta
          name="description"
          content="Sign in to your Darling Delights account to manage orders, wishlists, and enjoy a personalized jewelry experience."
        ></meta>
      </Helmet>
      <SignForm type="login" />
    </>
  );
};

export default SignIn;
