import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Assets/Styles/themes/default'
import { App } from "./App";
import { GlobalStyle } from "./Global"
import {Portifolio} from "./pages/NewProjects";
import { BackgroundImage, PageContainer } from "./Assets/Components/Background/styles";
import { Navbar } from "./Assets/Components/Navbar";


export default function Routing() {
    return (

        <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <BrowserRouter>
        <BackgroundImage>
            <PageContainer>
        <Navbar />

            <Routes >
                <Route path="/" element={<App />} />
                <Route path="/newProject" element={<Portifolio />} />
            </Routes>
            </PageContainer>
            </BackgroundImage>
        </BrowserRouter>
        </ThemeProvider>
    )
}