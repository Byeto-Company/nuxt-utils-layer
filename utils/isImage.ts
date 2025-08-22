/**
 * Checks if a file name has an image extension.
 *
 * Supported image types: `.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`.
 *
 * ### Parameters
 *
 * - **name**: `string | undefined` — The file name to check.
 *
 * ### Returns
 *
 * - `boolean` — `true` if the file name ends with a supported image extension, otherwise `false`.
 *
 * @function isImage
 * @param {string} name - File name to check (optional).
 * @returns {boolean} Whether the file is an image.
 * @module utils/isImage
 */
const isImage = (name: string | undefined) => {
    if (name) {
        const types = [".jpg", ".jpeg", ".png", ".svg", ".webp"];
        return types.some((type) => name.toLowerCase().endsWith(type));
    }
    return false;
};

export default isImage;
