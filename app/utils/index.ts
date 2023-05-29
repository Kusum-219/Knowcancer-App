import {JSHmac, CONSTANTS} from 'react-native-hash';

export const encryptStr = async (str: string, salt?: string) => {
  if (salt == undefined) salt = 'secret';
  return await JSHmac(str, salt, CONSTANTS.HmacAlgorithms.HmacSHA256);
};
