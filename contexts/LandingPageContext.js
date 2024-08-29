import { useContext, createContext, useState } from "react";

const LandingPageContext = createContext();

export const LandingPageContextProvider = ({ children }) => {
  const [loginBoxState, SetLoginBoxState] = useState(true);
  const [signupBoxState, SetSignUpBoxState] = useState(false);
  const [userLogoBoxState, SetUserLogoBoxState] = useState(false);

  return (
    <LandingPageContext.Provider
      value={{
        loginBoxState,
        SetLoginBoxState,
        signupBoxState,
        SetSignUpBoxState,
        userLogoBoxState,
        SetUserLogoBoxState,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};

export const useLandingPageContext = () => {
  return useContext(LandingPageContext);
};
