import { Helmet } from "react-helmet-async";
import SignForm from "../components/SignForm";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Sign Up</title>
      </Helmet>
      <SignForm type="register" />
    </>
  );
};

export default SignUp;
