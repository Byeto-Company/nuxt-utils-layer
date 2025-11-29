import { formatDistance, toDate } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

/**
 * Composable that provides a reactive "time ago" string in Persian (Farsi).
 *
 * It uses `date-fns-jalali` to calculate the distance between the given date
 * and the current time, formatted with Persian locale (`faIR`).
 *
 * The value updates automatically every **60 seconds**.
 *
 * ### Returns
 *
 * - **timeAgo**: `Ref<string>` — A reactive string like `"۲ دقیقه پیش"`.
 *
 * @function usePersianTimeAgo
 * @param {Date} date - The date to compare against the current time.
 * @returns {Ref<string>} A reactive string containing the relative Persian time.
 * @module composables/usePersianTimeAgo
 */
const usePersianTimeAgo = (date: Date) => {
    const timeAgo = ref("");

    const updateTimeAgo = () => {
        timeAgo.value = formatDistance(toDate(date), new Date(), {
            addSuffix: true,
            locale: faIR,
        });
    };

    onMounted(() => {
        updateTimeAgo();

        const interval = setInterval(updateTimeAgo, 60000);

        onUnmounted(() => clearInterval(interval));
    });

    return timeAgo;
};

export default usePersianTimeAgo;
