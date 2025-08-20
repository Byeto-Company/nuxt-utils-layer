const isImage = (name: string | undefined) => {
    if (name) {
        const types = [".jpg", ".jpeg", ".png", ".svg", ".webp"];
        return types.some((type) => name.toLowerCase().endsWith(type));
    }
    return false;
};

export default isImage;