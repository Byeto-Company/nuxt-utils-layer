import { ref, watch, useRefHistory } from "#imports";
import type { Ref } from "#imports";

/**
 * Composable that tracks changes in a reactive object.
 *
 * It compares the initial state of the object with the latest state  
 * using snapshots from `useRefHistory`.  
 *
 * If any property differs, `isNotEqual` becomes `true`.
 *
 * ### Returns
 *
 * - **isNotEqual**: `Ref<boolean>` — Becomes `true` if the object has changed.  
 * - **reset**: `Function` — Reset the tracked history to the current state.  
 * - **clear**: `Function` — Clear the entire tracked history.  
 *
 * @function useObjectTrack
 * @param {Ref<object>} object - A reactive object to track.
 * @returns {{ isNotEqual: Ref<boolean>, reset: Function, clear: Function }}
 * @module composables/useObjectTrack
 */
const useObjectTrack = (object: Ref) => {
    // state

    const isNotEqual = ref(false);

    const { history, reset, clear } = useRefHistory(object, {
        deep: true,
    });

    // watch

    watch(
        () => history.value,
        (newHistory) => {
            if (newHistory.length < 2) {
                isNotEqual.value = false;
                return;
            }

            const initial = newHistory[0].snapshot;
            const current = newHistory[newHistory.length - 1].snapshot;

            const hasChanges = Object.keys(initial).some(
                (key) => JSON.stringify(current[key]) !== JSON.stringify(initial[key]),
            );

            isNotEqual.value = hasChanges;
        },
        { deep: true },
    );

    return {
        isNotEqual,
        reset,
        clear,
    };
};

export default useObjectTrack;
