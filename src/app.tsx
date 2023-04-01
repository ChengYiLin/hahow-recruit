import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import ResetCSS from "./styles/resetCSS";
import AppRoutes from "./routes";

const App: FC = () => {
    return (
        <BrowserRouter>
            <ResetCSS />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
