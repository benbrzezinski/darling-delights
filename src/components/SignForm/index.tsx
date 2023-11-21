import { NavLink, Link } from "react-router-dom";
import { FormEventHandler } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { SignForm } from "../../types";
import useValidation from "../../hooks/useValidation";
import scss from "./SignForm.module.scss";

const SignForm = ({ type }: SignForm) => {
  const { verifyName, verifyEmail, isNameChecked, isEmailChecked } =
    useValidation();

  const nameID = nanoid();
  const emailID = nanoid();
  const passwordID = nanoid();
  const repeatPasswordID = nanoid();
  const toastId = nanoid();

  const handleSubmitLogin: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;

    if (!verifyEmail(email.value.trim())) {
      email.focus();
      return;
    }

    toast.success("You have successfully logged in");
    form.reset();
  };

  const handleSubmitRegister: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const repeatPassword = form.elements.namedItem(
      "repeatPassword"
    ) as HTMLInputElement;

    if (!verifyName(name.value.trim())) {
      name.focus();
      return;
    }

    if (!verifyEmail(email.value.trim())) {
      email.focus();
      return;
    }

    if (password.value !== repeatPassword.value) {
      password.focus();
      return toast.warning("Passwords don't match", { toastId });
    }

    toast.success("You have successfully registered, please check your email");
    form.reset();
  };

  return (
    <div className={scss.background}>
      <div className={scss.wrapper}>
        <section className={scss.section}>
          <div className={scss.headingBox}>
            <h1 className={scss.title}>
              {type === "login" ? "Sign In Below" : "Sign Up Below"}
            </h1>
            <p className={scss.infoText}>
              {type === "login" ? (
                <>
                  If you do not have an account yet, please go to the{" "}
                  <Link to="/registration" className={scss.link}>
                    SIGN UP
                  </Link>{" "}
                  tab
                </>
              ) : (
                <>
                  If you already have an account, please go to the{" "}
                  <Link to="/login" className={scss.link}>
                    SIGN IN
                  </Link>{" "}
                  tab
                </>
              )}
            </p>
          </div>
          <form
            className={scss.signForm}
            onSubmit={
              type === "login" ? handleSubmitLogin : handleSubmitRegister
            }
          >
            {type === "login" ? null : (
              <div className={scss.signFormBox}>
                <label className={scss.label} htmlFor={nameID}>
                  Name
                </label>
                <input
                  className={scss.input}
                  type="text"
                  name="name"
                  id={nameID}
                  placeholder="John"
                  required
                />
                {isNameChecked && <p className={scss.error}>Invalid name</p>}
              </div>
            )}
            <div className={scss.signFormBox}>
              <label className={scss.label} htmlFor={emailID}>
                Email
              </label>
              <input
                className={scss.input}
                type="email"
                name="email"
                id={emailID}
                placeholder="yourmail@emaily.com"
                required
              />
              {isEmailChecked && <p className={scss.error}>Invalid email</p>}
            </div>
            <div className={scss.signFormBox}>
              <label className={scss.label} htmlFor={passwordID}>
                Password
              </label>
              <input
                className={scss.input}
                type="password"
                name="password"
                id={passwordID}
                placeholder="***"
                required
                minLength={8}
                pattern="^[^\s]+$"
                title="The password cannot contain any spaces"
              />
            </div>
            {type === "login" ? null : (
              <div className={scss.signFormBox}>
                <label className={scss.label} htmlFor={repeatPasswordID}>
                  Repeat password
                </label>
                <input
                  className={scss.input}
                  type="password"
                  name="repeatPassword"
                  id={repeatPasswordID}
                  placeholder="***"
                  required
                  minLength={8}
                  pattern="^[^\s]+$"
                  title="The password cannot contain any spaces"
                />
              </div>
            )}
            <button className={scss.submitBtn} type="submit">
              {type === "login" ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className={scss.navBox}>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `${scss.navText} ${scss.isActive}` : scss.navText
              }
            >
              Sign In
            </NavLink>
            <p className={scss.navSlash}>/</p>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive ? `${scss.navText} ${scss.isActive}` : scss.navText
              }
            >
              Sign Up
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignForm;
