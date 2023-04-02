import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Loading from "../../components/Loading";
import ProfileAttribute from "../../components/ProfileAttribute";
import { getHeroProfile, updateHeroProfile } from "../../services";
import { getTotalPoints } from "../../utils/profileAttribute";
import { IHeroProfile } from "../../types/service";

const HeroDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: ${(props) => props.theme.media.lg}) {
        flex-direction: row;
    }
`;

const ProfileSection = styled.div`
    padding: 12px 0;

    @media (min-width: ${(props) => props.theme.media.lg}) {
        flex: 1 1 auto;
    }
`;

const ProfileUpdateSection = styled(ProfileSection)`
    @media (min-width: ${(props) => props.theme.media.lg}) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`;

const RemainPoints = styled.div`
    padding-bottom: 24px;
    text-align: right;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
    display: block;
    width: 100%;
    padding: 6px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: ${(props) => !props.disabled && "pointer"};
    background-color: ${(props) =>
        props.disabled ? "gray" : props.theme.palette.primary.main};

    @media (min-width: ${(props) => props.theme.media.lg}) {
        width: 160px;
        margin-left: auto;
    }
`;

const HeroDetail: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState<IHeroProfile>(null);
    const [totalPoint, setTotalPoint] = useState<number>(0);

    const { heroId } = useParams();

    const handleSave = () => {
        setIsLoading(true);
        updateHeroProfile(heroId, profile)
            .then(() => {
                alert("Update Success");
            })
            .catch((error) => {
                error?.message && alert(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        setIsLoading(true);
        getHeroProfile(heroId)
            .then((heroProfile) => {
                setProfile(heroProfile);
                setTotalPoint(getTotalPoints(heroProfile));
            })
            .catch((error) => {
                error?.message && alert(error.message);
            })
            .finally(() => setIsLoading(false));
    }, [heroId]);

    if (isLoading) {
        return <Loading isLoading={true} />;
    }

    const remainPoints = profile ? totalPoint - getTotalPoints(profile) : 0;

    return (
        <HeroDetailContainer>
            <ProfileSection>
                {!!profile &&
                    ["str", "int", "agi", "luk"].map(
                        (name: keyof IHeroProfile) => (
                            <ProfileAttribute
                                key={`${heroId}_${name}`}
                                name={name}
                                profileData={profile}
                                setProfile={setProfile}
                                disableAdd={remainPoints <= 0}
                            />
                        )
                    )}
            </ProfileSection>
            <ProfileUpdateSection>
                <RemainPoints>剩餘點數 : {remainPoints}</RemainPoints>
                <SubmitButton
                    disabled={remainPoints !== 0}
                    onClick={handleSave}
                >
                    儲存
                </SubmitButton>
            </ProfileUpdateSection>
        </HeroDetailContainer>
    );
};

export default HeroDetail;
