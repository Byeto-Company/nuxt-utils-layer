import fs from "fs/promises";
import path from "path";

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