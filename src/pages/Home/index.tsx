import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
    return (
        <div>
            Home
            <p>
                <Link to="/hero">Go Demo</Link>
            </p>
        </div>
    );
};

export default Home;
