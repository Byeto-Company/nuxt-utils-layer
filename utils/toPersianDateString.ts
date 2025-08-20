import { toCalendar, PersianCalendar, CalendarDateTime } from "@internationalized/date";

export const toReadableDateString = (
    date: Date,
    format: {
        time?: "full" | "none";
        date?: "full" | "none";
    } = {
        date: "full",
        time: "full",
    }
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
            date.getSeconds()
        ),
        new PersianCalendar()
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
