export const assetPath = (path: string) => {
    const base = process.env.NEXT_PUBLIC_BASE_URL || '';

    // Handle double slashes
    const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${normalizedBase}${normalizedPath}`;
};
