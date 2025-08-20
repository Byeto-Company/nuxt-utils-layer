export const useRatio = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const isMobile = useMediaQuery("(max-width: 768px)");

    return {
        isMobile,
        isDesktop,
    };
};
