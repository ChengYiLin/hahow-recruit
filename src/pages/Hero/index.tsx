import { FC, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import HeroCard from "../../components/HeroCard";
import { getHeroesList } from "../../services";
import { IHeroInfo } from "../../types/service";

const PageContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 24px 0;
`;

const HeroCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const Hero: FC = () => {
    const [heroList, setHeroList] = useState<IHeroInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getHeroesList()
            .then((data) => {
                Array.isArray(data) ? setHeroList(data) : setHeroList([]);
            })
            .catch((error) => {
                if (error?.message) {
                    alert(error.message);
                } else {
                    console.error(error);
                }
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <PageContainer>
            <HeroCardList>
                {heroList.map((heroInfo) => (
                    <HeroCard
                        key={heroInfo.id}
                        id={heroInfo.id}
                        image={heroInfo.image}
                        name={heroInfo.name}
                    />
                ))}
            </HeroCardList>
            <Outlet />
        </PageContainer>
    );
};

export default Hero;
