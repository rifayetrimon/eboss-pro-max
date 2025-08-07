import myAxios from '@/lib/myAxios';

export const loginUserWithAppcode = async (appCode: string) => {
  const response = await myAxios.post('api/v2/auth/appcode', { appcode: appCode });
  const token = response.data?.data?.encrypted_key;
  if (token) {
    localStorage.setItem('appToken', token);
  }
  return response.data;
};


export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await myAxios.post('api/v2/auth/:app/:user/login', credentials);
  localStorage.setItem('authToken', response.data.token); // Save login token
  return response.data;
};