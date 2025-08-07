import myAxios from '@/lib/myAxios';

// 🔐 Step 1: Get the encrypted app token
export const loginUserWithAppcode = async (appCode: string) => {
    const response = await myAxios.post('/api/v2/auth/appcode', { appcode: appCode });

    const token = response.data?.data?.encrypted_key;
    if (token) {
        localStorage.setItem('appToken', token); // Used in URL
        localStorage.setItem('x-encrypted-key', token); // Used in headers
    }

    return response.data;
};

// 👤 Step 2: Login using appToken in URL and token in header
export const loginUser = async (
    username: string,
    password: string,
    options?: {
        loginType?: string;
        firebaseId?: string;
        deviceSpec?: Record<string, any>;
    },
) => {
    const encryptedKey = localStorage.getItem('x-encrypted-key');
    if (!encryptedKey) throw new Error('Encrypted key missing');

    const url = '/api/v2/auth/eboss/staff/login'; // Static value

    const response = await myAxios.post(
        url,
        {
            app_version: '1.0.0',
            username,
            password,
            login_type: options?.loginType || 'normal',
            firebase_id: options?.firebaseId || 'web-client-id',
            platform_code: 1,
            ...(options?.deviceSpec ? { device_spec: options.deviceSpec } : {}),
        },
        {
            headers: {
                'x-encrypted-key': encryptedKey,
            },
        },
    );

    return response.data;
};
