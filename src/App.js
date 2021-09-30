import { QueryProvider } from "./contexts/query";
import { ModalProvider } from "./contexts/modal";

import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import { Theme, GlobalStyle } from "./styles";

export default function App() {
  return (
    <ModalProvider>
      <QueryProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </QueryProvider>
    </ModalProvider>
  );
}
