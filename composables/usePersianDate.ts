// composables/usePersianDate.ts
import { format, toDate } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

export default function usePersianDate() {
    const formatToPersian = (isoDate: string): string => {
        try {
            const date = toDate(new Date(isoDate));

            const persianDate = format(date, "yyyy/MM/dd", { locale: faIR });

            const persianTime = format(date, "HH:mm", { locale: faIR });

            return `${persianDate} | ${persianTime}`;
        } catch (error) {
            return "Invalid date";
        }
    };

    return {
        formatToPersian,
    };
}
