import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import useTheme from '@/hooks/useTheme';

export const useHomeStyles = () => {
  const { Layout, Gutters, Colors, Common } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      container: {
        flex:1 
      },
      mainView:{
        marginHorizontal:14,
        marginVertical:20,
        // backgroundColor:'red',
        // flex:1
      },
      textStyle:{
        color:Colors.black
      },
      headlineStyle:{fontWeight:'900', color:Colors.black,fontSize:32},
       text:{
        color:Colors.black,
        fontSize:18,
        ...Gutters.smallVMargin
      },
    });
  }, []);
};

export default useHomeStyles;
