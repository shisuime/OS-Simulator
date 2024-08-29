import Button from "../../common/Button/Button";
import ButtonStyles from "../../common/Button/Button.module.css";
import Styles from "./Login.module.css";
import Input from "../../common/Input/Input";
import InputStyles from "../../common/Input/Input.module.css";
import { useState } from "react";

import { useLandingPageContext } from "@/contexts/LandingPageContext";
import { useRouter } from "next/router";
import { SignInFunction } from "@/services/AuthService/AuthService";
import { useCookies } from "react-cookie";

const SignIn = () => {
  const router = useRouter();
  const { SetLoginBoxState, SetSignUpBoxState } = useLandingPageContext();
  const [usernameValue, SetusernameValue] = useState("");
  const [passwordValue, SetpasswordValue] = useState("");
  const [cookie, SetCookie] = useCookies("");

  const newtoDoggos = "New to Doggos? ";
  const signupwithEmail = "Sign Up with Email";

  const handleSignUp = () => {
    SetLoginBoxState(false);
    SetSignUpBoxState(true);
  };

  const handleClick = async () => {
    try {
      const response = await SignInFunction(usernameValue, passwordValue);
      if (response.statusCode === 200) {
        // console.log(response.token, "token");
        SetCookie("JWTtoken", response.token);
        console.log(cookie.name, "cookie");
        router.push("/home");
      } else if (response.statusCode === 403) {
        alert("invalid credentials");
      } else {
        alert("user not found");
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <>
      <div className={Styles.Login}>
        <div className={Styles.usernamecontainer}>
          Username or email address
        </div>
        <Input
          className={InputStyles.userinput}
          type="text"
          onChange={(e) => {
            SetusernameValue(e.target.value);
          }}
          value={usernameValue}
        />
        <div className={Styles.passwordcontainer}>Password </div>
        <Input
          className={InputStyles.userinput}
          type="password"
          onChange={(e) => {
            SetpasswordValue(e.target.value);
          }}
          value={passwordValue}
        />
        <div className={Styles.forgotpasswordcontainer}>
          <div className={Styles.forgotpassword}>Forgot Password</div>
        </div>

        <Button onClick={handleClick} className={ButtonStyles.login}>
          Log In
        </Button>
      </div>
      <div className={Styles.signupcontainer}>
        <div className={Styles.signup}>
          {newtoDoggos}
          <span className={Styles.signupwithemail}>{signupwithEmail}</span>
        </div>

        <Button className={ButtonStyles.signup} onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
    </>
  );
};

export default SignIn;
