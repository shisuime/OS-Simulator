import Login from "../AuthenticationBox/LoginComponent/Login";
import Styles from "./LandingPageComponent.module.css";
import Image from "next/image";
import logo from "../../public/Assets/OSicon.png";

import UserLogo from "../UserLogoComponemts/UserLogoComponents";
import { useLandingPageContext } from "@/contexts/LandingPageContext";
import SignUpComponent from "../AuthenticationBox/SignupPageComponents/SignupComponent";

const LandingPageComponent = () => {
  const { loginBoxState, signupBoxState, userLogoBoxState } =
    useLandingPageContext();
  return (
    <div className={Styles.LoginPage}>
      <div className={Styles.textcontainer}>
        <div className={Styles.osdescription}>
          A friendly and intuitive operating system designed for a paws-itively
          delightful user experience.
        </div>
        <div className={Styles.title}>DoGGos</div>
      </div>
      <div className={Styles.logosandAuthboxContainer}>
        <Image className={Styles.logo} src={logo} alt="logo" />
        <div className={Styles.doogos}>Sign in to Doggos</div>

        {(loginBoxState && <Login />) ||
          (signupBoxState && <SignUpComponent />) ||
          (userLogoBoxState && <UserLogo />)}
      </div>
    </div>
  );
};

export default LandingPageComponent;
