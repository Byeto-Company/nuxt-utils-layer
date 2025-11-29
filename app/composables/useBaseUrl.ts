/**
 * Composable that returns the application's public API base URL
 * from the Nuxt runtime configuration.
 *
 * ### Returns
 *
 * - **API base URL**: `string` — The value of `runtimeConfig.public.API_BASE_URL`.
 *
 * @function useBaseUrl
 * @returns {string} The public API base URL.
 * @module composables/useBaseUrl
 */
const useBaseUrl = () => {
    const config = useRuntimeConfig();
    return config.public.API_BASE_URL;
};

export default useBaseUrl;
