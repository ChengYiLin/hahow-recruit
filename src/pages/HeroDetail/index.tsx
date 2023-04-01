import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroProfile, updateHeroProfile } from "../../services";
import { IHeroProfile } from "../../types/service";

const HeroDetail: FC = () => {
    const [profile, setProfile] = useState<IHeroProfile>(null);
    const [totalPoint, setTotalPoint] = useState<number>(0);

    const { heroId } = useParams();

    const handleUpdate = () => {
        updateHeroProfile(heroId, profile)
            .then((res) => {
                if (res === "OK") {
                    alert("Update Success");
                }
            })
            .catch((error) => {
                if (error?.message) {
                    alert(error.message);
                } else {
                    console.error(error);
                }
            });
    };

    useEffect(() => {
        getHeroProfile(heroId)
            .then((heroProfile) => {
                const heroTotalPoints = Object.keys(heroProfile).reduce(
                    (acc, cur: keyof IHeroProfile) => {
                        return acc + heroProfile[cur];
                    },
                    0
                );

                setProfile(heroProfile);
                setTotalPoint(heroTotalPoints);
            })
            .catch((error) => {
                if (error?.message) {
                    alert(error.message);
                } else {
                    console.error(error);
                }
            });
    }, [heroId]);

    const remainPoints = profile
        ? totalPoint -
          Object.keys(profile).reduce((acc, cur: keyof IHeroProfile) => {
              return acc + profile[cur];
          }, 0)
        : 0;

    return (
        <div style={{ padding: "32px" }}>
            <h1>HeroDetail {heroId}</h1>
            <div>
                <ul>
                    <li>STR : {profile?.str}</li>
                    <li>INT : {profile?.int}</li>
                    <li>AGI : {profile?.agi}</li>
                    <li>LUK : {profile?.luk}</li>
                </ul>
            </div>
            <p>剩餘點數 : {remainPoints}</p>
            <button type="button" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
};

export default HeroDetail;
