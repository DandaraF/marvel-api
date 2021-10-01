import { QueryProvider } from "./contexts/query";
import { ModalProvider } from "./contexts/modal";

import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import { Theme, GlobalStyle } from "./styles";
import { LoadingProvider } from "./contexts/loading";

export default function App() {
  return (
    <ModalProvider>
      <QueryProvider>
        <LoadingProvider>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Routes />
          </ThemeProvider>
        </LoadingProvider>
      </QueryProvider>
    </ModalProvider>
  );
}
