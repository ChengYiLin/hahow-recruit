import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const Hero: FC = () => {
    return (
        <div>
            Hero
            <ul>
                <li>
                    <Link to="/hero/1">1</Link>
                </li>
                <li>
                    <Link to="/hero/2">2</Link>
                </li>
                <li>
                    <Link to="/hero/3">3</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Hero;
