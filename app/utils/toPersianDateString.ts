import { toCalendar, PersianCalendar, CalendarDateTime } from "@internationalized/date";

/**
 * Converts a JavaScript `Date` object into a readable Persian calendar date string.
 *
 * The function uses `@internationalized/date` to convert the Gregorian date
 * to the Persian calendar and formats it as `YYYY-MM-DD - HH:MM:SS` by default.
 *
 * You can optionally hide the date or time by providing the `format` object.
 *
 * ### Parameters
 *
 * - **date**: `Date` — The JavaScript `Date` object to convert.  
 * - **format**: `object` — Optional formatting options:  
 *     - `date`: `"full"` or `"none"` — Whether to include the date (default `"full"`).  
 *     - `time`: `"full"` or `"none"` — Whether to include the time (default `"full"`).  
 *
 * ### Returns
 *
 * - `string` — Formatted Persian calendar date string.
 *
 * @function toReadableDateString
 * @param {Date} date - The Date object to convert.
 * @param {object} [format] - Optional formatting options (see above).
 * @returns {string} Persian calendar date and time string.
 * @module utils/toReadableDateString
 */
export const toReadableDateString = (
    date: Date,
    format: {
        time?: "full" | "none";
        date?: "full" | "none";
    } = {
        date: "full",
        time: "full",
    },
) => {
    const pad2 = (val: string | number) => {
        return String(val).padStart(2, "0");
    };

    const calendar = toCalendar(
        new CalendarDateTime(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ),
        new PersianCalendar(),
    );

    const y = calendar.year;
    const m = pad2(calendar.month);
    const d = pad2(calendar.day);

    const hh = pad2(calendar.hour);
    const mm = pad2(calendar.minute);
    const ss = pad2(calendar.second);

    const dateSection = `${y}-${m}-${d}`;
    const timeSection = ` - ${hh}:${mm}:${ss}`;

    return `${format?.date === "full" ? dateSection : ""}${format?.time === "full" ? timeSection : ""}`;
};
