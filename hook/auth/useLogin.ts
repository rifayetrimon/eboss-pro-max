import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/services/auth/authService';

export const useLogin = () => {
    return useMutation({
        mutationFn: ({ username, password, options }: { username: string; password: string; options?: { loginType?: string; firebaseId?: string; deviceSpec?: Record<string, any> } }) =>
            loginUser(username, password, options),
        onSuccess: (data) => {
            console.log('Login successful:', data);
            // Redirect to dashboard or show user UI
        },
        onError: (error: any) => {
            console.error('Login failed:', error.response?.data || error.message);
        },
    });
};
