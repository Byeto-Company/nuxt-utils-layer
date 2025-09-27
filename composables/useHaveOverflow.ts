import type { ShallowRef } from "vue";

/**
 * Check is given element has vertical overflow or not.
 *
 * @function useHaveOverflow
 * @returns {boolean} The public API base URL.
 * @module composables/useHaveOverflow
 */
const useHaveOverflow = (el: ShallowRef<HTMLElement | null>) => {
    const haveScroll = ref(false);

    onMounted(() => {
        const updatePadding = () => {
            haveScroll.value = el.value!.scrollHeight > el.value!.clientHeight;
        };

        // Watch size changes
        const resizeObserver = new ResizeObserver(updatePadding);
        resizeObserver.observe(el.value!);

        // Initial check
        updatePadding();

        onBeforeUnmount(() => {
            resizeObserver.disconnect();
        });
    });

    return haveScroll;
};

export default useHaveOverflow;
