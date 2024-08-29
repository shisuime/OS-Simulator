import Styles from "../UserLogoComponemts/UserLogoComponent.module.css";
import Button from "../common/Button/Button";
import ButtonStyles from "../common/Button/Button.module.css";
import Input from "../common/Input/Input";
import InputStyles from "../common/Input/Input.module.css";
import { useLandingPageContext } from "@/contexts/LandingPageContext";
import { useRouter } from "next/router";
import { useState } from "react";

const UserLogo = () => {
  const { SetSignUpBoxState, SetUserLogoBoxState } = useLandingPageContext();
  const [usernameValue, SetusernameValue] = useState("");
  const router = useRouter();

  const handleNext = () => {
    router.push("/home");
  };

  const handleCancel = () => {
    SetUserLogoBoxState(false);
    SetSignUpBoxState(true);
  };
  return (
    <div className={Styles.UserLogoContainer}>
      <div className={Styles.Setuserlogo}> Upload Your Picture</div>
      <div className={Styles.Userlogo}></div>
      <div className={Styles.Setuserlogo}>Enter your Username</div>
      <Input
        className={InputStyles.userinput}
        style={{ width: "250px" }}
        value={usernameValue}
        onChange={(e) => SetusernameValue(e.target.value)}
      />
      <div className={Styles.buttonContainer}>
        <Button className={ButtonStyles.cancel} onClick={handleCancel}>
          Cancel
        </Button>
        <Button className={ButtonStyles.submit} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserLogo;
