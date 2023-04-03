import { IHeroProfile } from "../types/service";

/**
 * Calculates the total number of points in a hero's profile.
 * @param {IHeroProfile} profileData - The hero's profile data.
 * @return {number} - The total number of points in the hero's profile.
 */
export const getTotalPoints = (profileData: IHeroProfile): number => {
    if (!profileData || typeof profileData !== "object") {
        return 0;
    }

    return Object.keys(profileData).reduce((acc, cur: keyof IHeroProfile) => {
        return acc + profileData[cur];
    }, 0);
};
