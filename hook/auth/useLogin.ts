import { useMutation } from '@tanstack/react-query';
import { loginUser } from "@/services/auth/authService";


export const useLogin = () => {
    return useMutation({
      mutationFn: loginUser,
      onSuccess: (data) => {
        console.log('Login successful:', data);
        // Maybe store token, redirect, etc.
      },
      onError: (error: any) => {
        console.error('Login failed:', error.response?.data || error.message);
      },
    });
  };