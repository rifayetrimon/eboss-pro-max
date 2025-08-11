// src/lib/assetPath.ts

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const assetPath = (path: string) => {
    return `${basePath}${path}`;
};
