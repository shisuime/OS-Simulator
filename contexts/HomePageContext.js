import { useContext, createContext, useState } from "react";

const HomePageContext = createContext();

export const HomePageContextProvider = ({ children }) => {
  const [searchText, SetsearchText] = useState();
  const [filteredArray, SetfilteredArray] = useState([]);
  const [menuState, SetmenuState] = useState(false);
  const [folderState, SetfolderState] = useState(false);
  const [imageViewerState, SetimageViewerState] = useState(false);
  const [settingsState, SetsettingsState] = useState(false);
  const [flowPopUpState, SetflowPopUpState] = useState(false);
  const [accountSettingState, SetaccountSettingState] = useState(false);
  const [appSettingState, SetappSettingState] = useState(false);
  const [textEditorVariable, SettextEditorVariable] = useState("");
  const [tempInputValue, SettempInputValue] = useState("");
  const [textEditorState, SetTextEditorState] = useState(false);
  const [OpenFlow, SetOpenFlowState] = useState(false);
  const [CreateFlow, SetCreateFlow] = useState(false);
  const [DeleteFlow, SetDeleteFlow] = useState(false);
  const [imageObj, SetimageObj] = useState();
  const [imageName, SetImageName] = useState();

  return (
    <HomePageContext.Provider
      value={{
        searchText,
        SetsearchText,
        filteredArray,
        SetfilteredArray,
        menuState,
        SetmenuState,
        folderState,
        SetfolderState,
        imageViewerState,
        SetimageViewerState,
        imageObj,
        SetimageObj,
        imageName,
        SetImageName,
        settingsState,
        SetsettingsState,
        flowPopUpState,
        SetflowPopUpState,
        accountSettingState,
        SetaccountSettingState,
        appSettingState,
        SetappSettingState,
        textEditorVariable,
        SettextEditorVariable,
        tempInputValue,
        SettempInputValue,
        textEditorState,
        SetTextEditorState,
        OpenFlow,
        SetOpenFlowState,
        DeleteFlow,
        SetDeleteFlow,
        CreateFlow,
        SetCreateFlow,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};
