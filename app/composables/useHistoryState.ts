/**
 * Composable that provides a reactive reference to the browser's history state.
 *
 * It initializes with the current `history.state` and updates automatically
 * whenever the user navigates through the browser history (back/forward navigation).
 *
 * Event listener is cleaned up automatically when the component is unmounted.
 *
 * ### Returns
 *
 * - **historyState**: `Ref<object>` — A reactive reference containing the current history state.
 *
 * @function useHistoryState
 * @returns {Ref<object>} Reactive history state object.
 * @module composables/useHistoryState
 */
const useHistoryState = () => {
    const historyState = ref({});

    const onPopState = (event: PopStateEvent) => {
        historyState.value = event.state;
    };

    onMounted(() => {
        historyState.value = history.state;
        window.addEventListener("popstate", onPopState);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("popstate", onPopState);
    });

    return historyState;
};

export default useHistoryState;
