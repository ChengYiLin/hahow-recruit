import { FC } from "react";
import { useParams } from "react-router-dom";

const HeroDetail: FC = () => {
    const { heroId } = useParams();

    return <div>HeroDetail {heroId}</div>;
};

export default HeroDetail;
