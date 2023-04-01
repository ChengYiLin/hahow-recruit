import { IHeroProfile } from "../types/service";

export const getTotalPoints = (profileData: IHeroProfile): number => {
    if (!profileData || typeof profileData !== "object") {
        return 0;
    }

    return Object.keys(profileData).reduce((acc, cur: keyof IHeroProfile) => {
        return acc + profileData[cur];
    }, 0);
};