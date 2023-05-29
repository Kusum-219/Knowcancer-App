import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import useTheme from '@/hooks/useTheme';

export const useLoginScreenStyles = () => {
    const { Layout, Gutters, Colors, Common } = useTheme();

    return useMemo(() => {
        return StyleSheet.create({
            container: Common.container,
            bottomMargin: Gutters.smallBMargin,
            forgotPasswordContainer: Layout.rowHCenter,
            errorTextColor: { color: Colors.error },
            forgotPasswordLabel: {
                ...Gutters.tinyLMargin,
                textDecorationLine: 'underline',
                color: Colors.primary,
            },
            loginButtonStyle: {
                ...Gutters.regularTMargin,
                ...Layout.justifyContentCenter,
                alignSelf: 'flex-end',
                width: 80,
                height: 40,
            },
        });
    }, [Layout]);
};

export default useLoginScreenStyles;
