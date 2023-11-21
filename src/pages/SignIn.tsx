import { Helmet } from "react-helmet-async";
import SignForm from "../components/SignForm";

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Sign In</title>
      </Helmet>
      <SignForm type="login" />
    </>
  );
};

export default SignIn;
