import { useBreakpoints } from "@vueuse/core";

const useAppBreakPoints = () => {
    const breakpoints = useBreakpoints({
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
    });

    const currentBreakPoint = computed(() => breakpoints.active());
    const isMobileSize = computed(() => breakpoints.active().value == "mobile");
    const isTabletSize = computed(() => breakpoints.active().value == "tablet");
    const isLaptopSize = computed(() => breakpoints.active().value == "laptop");
    const isDesktopSize = computed(() => breakpoints.active().value == "desktop");

    return {
        currentBreakPoint,
        isMobileSize,
        isTabletSize,
        isLaptopSize,
        isDesktopSize,
    };
};

export default useAppBreakPoints;
