export const assetPath = (path: string) => {
    // For static assets, Next.js automatically applies basePath
    // Only use NEXT_PUBLIC_BASE_URL for external URLs or API calls
    if (typeof window !== 'undefined') {
        // Client-side: use relative paths, Next.js handles basePath automatically
        return path;
    }

    // Server-side: construct full URL if needed
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return `${baseUrl}${basePath}${path}`;
};
