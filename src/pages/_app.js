import App from "next/app";
import { useEffect } from "react";
import { mobileDetect } from "../utils/mobile-detect";

import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../styles/theme";
import Header from "../components/common/Header";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined" && pageProps.hasOwnProperty("isMobile")) {
    window.isMobile = pageProps.isMobile;
  }

  useEffect(() => {
    let src = document.querySelector("#src");
    let script = document.querySelector(`script[src*="pay.naver.com"]`);
    src.textContent = script.src;
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box as="main" p="32px" display="flex" flexDirection="column">
        <Header />
        <Component {...pageProps} />
        <div id="src"></div>
      </Box>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  if (appContext.ctx.req) {
    appProps.pageProps = { isMobile: mobileDetect(appContext.ctx.req) };
  }
  return { ...appProps };
};

export default MyApp;
