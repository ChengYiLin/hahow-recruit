import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ResetCSS from "./styles/resetCSS";
import theme from "./styles/theme";
import AppRoutes from "./routes";

const App: FC = () => {
    return (
        <BrowserRouter>
            <ResetCSS />
            <ThemeProvider theme={theme}>
                <AppRoutes />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
