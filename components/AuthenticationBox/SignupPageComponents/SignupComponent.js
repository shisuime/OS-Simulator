import Input from "../../common/Input/Input";
import InputStyles from "../../common/Input/Input.module.css";
import Styles from "./SignupComponent.module.css";
import Button from "../../common/Button/Button";
import ButtonStyles from "../../common/Button/Button.module.css";
import { useLandingPageContext } from "@/contexts/LandingPageContext";
import { SignUp } from "@/services/AuthService/AuthService";
import { useState } from "react";

const SignUpComponent = () => {
  const { SetLoginBoxState, SetSignUpBoxState, SetUserLogoBoxState } =
    useLandingPageContext();

  const [userNameValue, SetuserNameValue] = useState("");
  const [userPasswordValue, SetuserPasswordValue] = useState("");
  const [confirmPasswordValue, SetconfirmPasswordValue] = useState("");

  const handleSubmit = async () => {
    if ((!userNameValue, !userPasswordValue, !confirmPasswordValue)) {
      if (!userNameValue) {
        alert("enter username");
      } else if (!userPasswordValue) {
        alert("enter password");
      } else if (!confirmPasswordValue) {
        alert("enter confirm password");
      }
    } else {
      if (userPasswordValue === confirmPasswordValue) {
        try {
          const response = await SignUp(userNameValue, confirmPasswordValue);
          console.log(response, "response");
          if (response.statusCode === 200) {
            alert("signup successful");
            SetSignUpBoxState(false);
            SetUserLogoBoxState(true);
          } else if (response.statusCode === 500) {
            alert("account already exists");
          }
        } catch (error) {
          alert("error in signup", error);
        }
      } else {
        alert("password missmatch");
      }
    }
  };
  const handleCancel = () => {
    SetSignUpBoxState(false);
    SetLoginBoxState(true);
  };

  return (
    <>
      <div className={Styles.signupcontainer}>
        <div className={Styles.firstnamecontainer}>Enter Your Name</div>
        <Input
          className={InputStyles.userinput}
          onChange={(e) => {
            SetuserNameValue(e.target.value);
          }}
          value={userNameValue}
          type="text"
        />
        <div className={Styles.passwordcontainer}>Password </div>
        <Input
          className={InputStyles.userinput}
          onChange={(e) => {
            SetuserPasswordValue(e.target.value);
          }}
          value={userPasswordValue}
          type="password"
        />
        <div className={Styles.confirmpasswordcontainer}>Confirm Password </div>
        <Input
          className={InputStyles.userinput}
          onChange={(e) => {
            SetconfirmPasswordValue(e.target.value);
          }}
          value={confirmPasswordValue}
          type="password"
        />
        <div className={Styles.buttonsContainer}>
          <Button className={ButtonStyles.submit} onClick={handleSubmit}>
            Submit
          </Button>
          <Button className={ButtonStyles.cancel} onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};
export default SignUpComponent;
