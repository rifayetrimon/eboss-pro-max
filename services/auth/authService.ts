import myAxios from "@/lib/myAxios";


export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await myAxios.post('api/v2/auth/:app/:user/login ', credentials);
    return response.data;
  };
  
// export const register = async (data: any) => {
//     const response = await myAxios.post('/auth/register', data);
//     return response.data;
//  };