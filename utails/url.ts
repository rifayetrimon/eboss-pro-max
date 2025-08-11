export const assetPath = (path: string) => {
    // In production, NEXT_PUBLIC_BASE_URL already includes basePath
    // In development, it's just http://localhost:3000
    return process.env.NEXT_PUBLIC_BASE_URL ? new URL(path, process.env.NEXT_PUBLIC_BASE_URL).href : path;
};
