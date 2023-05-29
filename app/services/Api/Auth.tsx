import instance from "@/services";


export const login = () => {
  const url = 'auth/signin';
  return instance.post(url);
};
