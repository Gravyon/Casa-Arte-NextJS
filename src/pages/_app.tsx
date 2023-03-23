import type { AppProps } from "next/app";
import { theme } from "@/chakra/theme";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

// import Layout from "@/components/Layout/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </ColorModeProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
