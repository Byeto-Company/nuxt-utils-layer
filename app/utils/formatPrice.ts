/**
 * Formats a number as a Persian currency string.
 *
 * Uses `Intl.NumberFormat` with the "fa-IR" locale and IRR currency.
 * Replaces the default "ریال" text with a custom currency symbol.
 *
 * ### Parameters
 *
 * - **price**: `number` — The numeric value to format.
 * - **symbol**: `string` — Optional currency symbol to replace "ریال" (default: `"تومان"`).
 *
 * ### Returns
 *
 * - `string` — Formatted price string, e.g., `"۱,۰۰۰ تومان"`.
 *
 * @function formatPrice
 * @param {number} price - The number to format.
 * @param {string} [symbol="تومان"] - Currency symbol to display.
 * @returns {string} Formatted Persian currency string.
 * @module utils/formatPrice
 */
const formatPrice = (price: number, symbol = "تومان") => {
    const formatter = new Intl.NumberFormat("fa-IR", {
        style: "currency",
        currency: "IRR",
    });

    return formatter.format(price).replace("ریال", symbol);
};

export default formatPrice;
