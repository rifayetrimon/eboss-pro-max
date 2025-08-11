export const assetPath = (path: any) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_URL || '';
    return `${basePath}${path}`;
};
