import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import * as Pages from "../pages";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Pages.Home />} />
                <Route path="heroes" element={<Pages.Hero />}>
                    <Route path=":heroId" element={<Pages.HeroDetail />} />
                </Route>
                <Route path="*" element={<Pages.PageNotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
