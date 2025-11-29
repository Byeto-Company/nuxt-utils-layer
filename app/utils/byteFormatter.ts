/**
 * Converts a number of bytes into a human-readable string with appropriate units.
 *
 * Examples:
 * - 1024 → "1 Kb"
 * - 1048576 → "1 Mb"
 *
 * ### Parameters
 *
 * - **bytes**: `number` — The number of bytes to format.  
 * - **decimals**: `number` — Optional number of decimal places (default: 2).  
 *
 * ### Returns
 *
 * - `string` — Formatted string with the size and unit (e.g., `"1.23 Mb"`).
 *
 * @function byteFormatter
 * @param {number} bytes - The number of bytes to format.
 * @param {number} [decimals=2] - Number of decimal places.
 * @returns {string} Human-readable byte size.
 * @module utils/byteFormatter
 */
const byteFormatter = (bytes: number, decimals = 2) => {
    if (!+bytes) return "0 B";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["B", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export default byteFormatter;