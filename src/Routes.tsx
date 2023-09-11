import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/styles/themes/default";
import { GlobalStyle } from "./Global";
import RoutesArea from "./state/data/routes";
import {
  BackgroundImage,
  PageContainer,
} from "./assets/components/Background/styles";
import { Navbar } from "./assets/components/Navbar";
import { Provider } from "react-redux";
import store from "./state/local/store";

export default function Routing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <BackgroundImage>
          <PageContainer>
            <Navbar />
            <Provider store={store}>
              <Routes>
                {RoutesArea.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Provider>
          </PageContainer>
        </BackgroundImage>
      </BrowserRouter>
    </ThemeProvider>
  );
}
