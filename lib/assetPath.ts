// src/lib/assetPath.ts
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const assetPath = (path: string) => {
    const basePath = publicRuntimeConfig?.basePath || '';
    return `${basePath}${path}`;
};
