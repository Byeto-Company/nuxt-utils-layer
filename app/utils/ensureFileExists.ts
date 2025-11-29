import fs from "fs/promises";
import path from "path";

/**
 * Ensures that a file exists at the given path.
 *
 * If the file does not exist, it creates the necessary directories
 * and writes the file with the specified initial content.
 *
 * ### Parameters
 *
 * - **filePath**: `string` — The path of the file to ensure.  
 * - **initialContent**: `string` — Optional initial content to write if the file does not exist (default: `""`).  
 *
 * ### Returns
 *
 * - `Promise<void>` — Resolves when the file exists or has been created.
 *
 * @function ensureFileExists
 * @param {string} filePath - Path to the file to ensure.
 * @param {string} [initialContent=""] - Content to write if the file does not exist.
 * @returns {Promise<void>} Resolves when the file exists or is created.
 * @module utils/ensureFileExists
 */
const ensureFileExists = async (filePath: string, initialContent = "") => {
    try {
        await fs.access(filePath);
    } catch (error) {
        const err = error as any;
        if (err.code === "ENOENT") {
            await fs.mkdir(path.dirname(filePath), { recursive: true });
            await fs.writeFile(filePath, initialContent, "utf-8");
        } else {
            throw err;
        }
    }
};

export default ensureFileExists;