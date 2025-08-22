import { useRuntimeConfig } from "#imports";

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
const useBaseUrl = () => {
    const config = useRuntimeConfig();
    return config.public.API_BASE_URL;
};

export default useBaseUrl;
