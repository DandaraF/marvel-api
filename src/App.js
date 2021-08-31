import { ThemeProvider } from "styled-components";
import { Theme, GlobalStyle } from "./styles";
import Routes from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
