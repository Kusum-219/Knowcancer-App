import axios, {AxiosError} from 'axios';
import {useMutation, UseMutationOptions} from 'react-query';

import {useAuthContext} from '@/screens/auth/AuthContext';
import {Alert} from 'react-native';

export const useLogin = (
  config: UseMutationOptions<
    {id_token: string},
    AxiosError<any>,
    {username: string; password: string}
  > = {},
) => {
  const {updateToken} = useAuthContext();
  const mutation = useMutation(
    ({username, password}) => axios.post('/authenticate', {username, password}),
    {
      ...config,
      onSuccess: (data, ...rest) => {
        updateToken(data.id_token);
        config?.onSuccess?.(data, ...rest);
      },
      onError: (error, ...rest) => {
        if (error?.response?.status === 401) {
          Alert.alert('Error', 'Wrong email or password. Please try again.');
        } else {
          Alert.alert('Error', 'Failed to log in. Please try again');
        }
        config?.onError?.(error, ...rest);
      },
    },
  );
  return {...mutation, login: mutation.mutate};
};
