import { FC } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FC = () => {
    return (
        <div>
            <p>Page Not Found</p>
            <div>
                <Link to="/">Go to HomePage</Link>
            </div>
        </div>
    );
};

export default PageNotFound;
