// // services/user/userService.ts
import myAxios from '@/lib/myAxios';

export const getUserProfile = async () => {
    if (typeof window === 'undefined') {
        throw new Error('localStorage not available on server');
    }

    const userId = localStorage.getItem('user_id');
    const encryptedKey = localStorage.getItem('x-encrypted-key');
    const encryptedAppCode = localStorage.getItem('userToken');

    // console.log(userId);
    // console.log(encryptedKey);

    if (!userId) throw new Error('No user_id found in localStorage');
    if (!encryptedKey) throw new Error('Encrypted key missing');

    const response = await myAxios.post(
        `api/v2/staff/eboss/staff/details`,
        {
            action: 'get_staff_one',
            filter_uid: userId,
        },
        {
            headers: {
                'x-encrypted-key': encryptedKey,
                'x-encrypted-user': encryptedAppCode,
            },
        },
    );

    return response.data.data;
};
