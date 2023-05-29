import { StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { useMemo } from 'react';

export const useButtonStyles = () => {
  const { Colors } = useTheme();
  return useMemo(() => {
    return StyleSheet.create({
      label: {
        color: Colors.white,
      },
    });
  }, []);
};

export default useButtonStyles;
