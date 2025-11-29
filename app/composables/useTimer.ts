type Props = {
    duration: number;
    callback?: () => void;
};

/**
 * Composable that provides a countdown timer with start and reset functionality.
 *
 * The timer counts down from the given duration (in milliseconds) and optionally
 * calls a callback function when finished.
 *
 * ### Returns
 *
 * - **isPending**: `Ref<boolean>` — `true` if the timer is currently running.
 * - **timer**: `Ref<number>` — The remaining time in seconds.
 * - **reset**: `Function` — Resets the timer to the initial duration and stops it.
 * - **start**: `Function` — Starts the countdown timer.
 *
 * @function useTimer
 * @param {Props} props - Timer configuration.
 * @param {number} props.duration - Duration of the timer in milliseconds.
 * @param {Function} [props.callback] - Optional callback to run when the timer finishes.
 * @returns {{ isPending: Ref<boolean>, timer: Ref<number>, reset: Function, start: Function }} Timer state and controls.
 * @module composables/useTimer
 */
const useTimer = ({ duration, callback }: Props) => {
    const timeout = ref<NodeJS.Timeout | null>(null);
    const interval = ref<NodeJS.Timeout | null>(null);

    const isPending = ref(false);
    const timer = ref(duration / 1000);

    const reset = () => {
        if (timeout.value) clearTimeout(timeout.value);
        if (interval.value) clearInterval(interval.value);

        isPending.value = false;
        timer.value = duration / 1000;
    };

    const start = () => {
        isPending.value = true;

        timeout.value = setTimeout(() => {
            if (interval.value) clearInterval(interval.value);
            if (callback) callback();
            isPending.value = false;
            timer.value = duration / 1000;
        }, duration);

        interval.value = setInterval(() => {
            timer.value -= 1;
        }, 1000);
    };

    return {
        isPending,
        timer,
        reset,
        start,
    };
};

export default useTimer;
