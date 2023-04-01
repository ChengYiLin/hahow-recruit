import fetcher from "./fetcher";
import * as Types from '../types/service'

const API_DOMAIN = "https://hahow-recruit.herokuapp.com"

/**
 * Fetches a list of heroes from the API.
 *
 * @return {Promise<Types.IHeroInfo[]>} An array of hero information.
 */
export const getHeroesList = async (): Promise<Types.IHeroInfo[]> => {
    try {
        const result = await fetcher<Types.IHeroInfo[]>(`${API_DOMAIN}/heroes`, {
            headers: {
                "Accept": "application/json"
            }
        });
        return result
    } catch(error) {
        return Promise.reject(new Error('Get Heroes Data Failed'))
    }
}

/**
 * Fetches information for a single hero.
 *
 * @param {string} heroId - The ID of the hero.
 * @return {Promise<Types.IHeroInfo>} hero information.
 */
export const getHeroInfo =  async (heroId: string): Promise<Types.IHeroInfo> => {
    try {
        const result = await fetcher<Types.IHeroInfo>(`${API_DOMAIN}/heroes/${heroId}`, {
            headers: {
                "Accept": "application/json"
            }
        });
        return result
    } catch(error) {
        return Promise.reject(new Error('Get Hero Info Failed'))
    }
}

/**
 * Retrieves the profile information for a specific hero.
 * 
 * @param {string} heroId - The ID of the hero.
 * @return {Promise<Types.IHeroProfile>} The hero's profile information
 */
export const getHeroProfile =  async (heroId: string): Promise<Types.IHeroProfile> => {
    try {
        const result = await fetcher<Types.IHeroProfile>(`${API_DOMAIN}/heroes/${heroId}/profile`, {
            headers: {
                "Accept": "application/json"
            }
        });
        return result
    } catch(error) {
        return Promise.reject(new Error('Get Hero Profile Failed'))
    }
}

/**
 * Update hero profile with the provided data
 * 
 * @param {string} heroId - The ID of the hero.
 * @param {Types.IHeroProfile} data - The hero profile data to update
 * @return {Promise<string>} - Update Status
 */
export const updateHeroProfile =  async (heroId: string, data: Types.IHeroProfile): Promise<string> => {
    try {
        const result = await fetcher<string>(`${API_DOMAIN}/heroes/${heroId}/profile`, {
            method: 'PATCH',
            body: JSON.stringify(data)
        });

        if (result !== 'OK') {
            throw new Error(result)
        }

        return result
    } catch(error) {
        error?.message && console.error(error.message)
        return Promise.reject(new Error('Update Hero Profile Failed'))
    }
}