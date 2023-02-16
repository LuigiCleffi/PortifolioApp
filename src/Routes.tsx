import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Assets/Styles/themes/default";
import { App } from "./App";
import { GlobalStyle } from "./Global";
import { Portifolio } from "./pages/NewProjects";
import { ProjectProvider } from "./contexts/ProjectCardContex";
import {BackgroundImage, PageContainer} from "./Assets/Components/Background/styles";
import { Navbar } from "./Assets/Components/Navbar";
import { Login } from "./pages/Login";

export default function Routing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <BackgroundImage>
          <PageContainer>
            <Navbar />
            <ProjectProvider>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/newProject" element={<Portifolio />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </ProjectProvider>
          </PageContainer>
        </BackgroundImage>
      </BrowserRouter>
    </ThemeProvider>
  );
}
