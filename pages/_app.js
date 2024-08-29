import "@/styles/globals.css";
import { LandingPageContextProvider } from "@/contexts/LandingPageContext";
import { HomePageContextProvider } from "@/contexts/HomePageContext";

export default function App({ Component, pageProps }) {
  return (
    <HomePageContextProvider>
      <LandingPageContextProvider>
        <Component {...pageProps} />
      </LandingPageContextProvider>
    </HomePageContextProvider>
  );
}
