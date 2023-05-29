import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import useTheme from '@/hooks/useTheme';

export const useHeaderStyles = () => {
  const { Layout, Gutters, Colors, Common } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      container:{
        backgroundColor: Colors.primary,
        height:70
      },
      contentHeader:{
        ...Layout.row,
        ...Gutters.smallHMargin,
        ...Gutters.smallTPadding,
         alignItems:'center'
      },
      imageStyle:{
        borderRadius:14,
        marginHorizontal:5
      },
      nameStyle:{
        color:Colors.white
      },
      locationStyle:{
        ...Layout.row,
        alignItems:'center',
          ...Gutters.regularLMargin,
          ...Gutters.tinyTPadding,
      },
    });
  }, [Layout]);
};

export default useHeaderStyles;
