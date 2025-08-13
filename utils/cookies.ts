// utils/cookies.ts

// Determine if we're in production environment
const isProduction = process.env.NODE_ENV === 'production';

export const setAuthCookie = (name: string, value: string, days = 7) => {
    const hostname = window.location.hostname;

    // Determine domain based on environment
    let domain = '';
    if (isProduction && hostname.includes('awfatech.com')) {
        domain = 'awfatech.com';
    }

    // Set path to match your Nginx configuration
    const path = '/eboss-pro-max/';

    // Build cookie string
    let cookieString = `${name}=${value}; max-age=${days * 86400}; path=${path};`;

    // Add domain if specified
    if (domain) cookieString += ` domain=${domain};`;

    // Add security flags in production
    if (isProduction) cookieString += ' secure; samesite=lax';

    document.cookie = cookieString;
};

export const getAuthCookie = (name: string) => {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];
};

export const deleteAuthCookie = (name: string) => {
    document.cookie = `${name}=; max-age=0; path=/eboss-pro-max/;`;
    if (isProduction) {
        document.cookie = `${name}=; max-age=0; path=/eboss-pro-max/; domain=awfatech.com;`;
    }
};
