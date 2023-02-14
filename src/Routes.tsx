import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Assets/Styles/themes/default'
import { App } from "./App";
import { GlobalStyle } from "./Global"
import {Portifolio} from "./pages/NewProjects";


export default function Routing() {
    return (

        <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<App />} />
                <Route path="/newProject" element={<Portifolio />} />
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    )
}