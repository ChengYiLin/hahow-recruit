import { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { IHeroInfo } from "../../types/service";

const HeroCardWrapper = styled.div<{ isSelected: boolean }>`
    flex: 1 1 200px;
    padding: 8px;
    border: 1px solid black;
    box-sizing: border-box;
    cursor: pointer;

    background: ${(props) =>
        props.isSelected && props.theme.palette.secondary.main};
`;

const HeroImageContainer = styled.div<{ image: string }>`
    width: 100%;
    padding-bottom: 80%;
    background-color: gray;
    background-size: cover;
    background-position: center;
    background-image: ${(props) => `url(${props.image})`};
`;

const HeroName = styled.p`
    text-align: center;
    font-size: 18px;
    padding: 12px 0;
    color: black;
    font-weight: bolder;
`;

interface IProps extends IHeroInfo {}

const HeroCard: FC<IProps> = ({ id, name, image }) => {
    const { heroId } = useParams();

    const navigate = useNavigate();

    return (
        <HeroCardWrapper
            isSelected={+id === +heroId}
            onClick={() => {
                navigate(`/hero/${id}`);
            }}
        >
            <HeroImageContainer image={image} />
            <HeroName>{name}</HeroName>
        </HeroCardWrapper>
    );
};

export default HeroCard;
