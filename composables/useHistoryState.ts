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
