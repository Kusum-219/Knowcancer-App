import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import useTheme from '@/hooks/useTheme';

export const useForgotPasswordStyles = () => {
  const { Layout, Gutters, Colors, Common } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      container: Common.container,
      bottomMargin: Gutters.regularBMargin,
      errorTextColor: { color: Colors.error },
      buttonContainer: {
        ...Gutters.largeTMargin,
        ...Layout.rowHCenter,
        ...Layout.justifyContentBetween,
      },
      loginButtonContainer: Layout.rowHCenter,
      loginButtonLabel: {
        ...Gutters.tinyLMargin,
        textDecorationLine: 'underline',
        color: Colors.primary,
      },
      buttonStyle: {
        width: 90,
        height: 40,
        ...Layout.justifyContentCenter,
      },
    });
  }, [Layout]);
};

export default useForgotPasswordStyles;
