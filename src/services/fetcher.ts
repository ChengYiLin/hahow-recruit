/**
 * Fetches data from the specified URL and resolves to the parsed JSON response.
 *
 * @param {string} url The URL to fetch.
 * @param {RequestInit} config custom headers
 * @return {Promise} A Promise that resolves to the parsed JSON response.
 * @throws {Error} If the response status indicates an error
 */
async function fetcher<T>(url: string, config: RequestInit = {}): Promise<T> {
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...config.headers,
        },
        ...config
    });
    
    if (!res.ok) {
        return Promise.reject(res);
    }

    return await res.json();
}
  

export default fetcher