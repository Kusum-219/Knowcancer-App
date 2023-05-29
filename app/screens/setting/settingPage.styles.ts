import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import useTheme from '@/hooks/useTheme';

export const useSettingStyles = () => {
  const { Layout, Gutters, Colors, Common } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
        topView:{
            ...Gutters.regularHMargin,
        ...Gutters.regularVMargin,
        ...Layout.row,
        alignItems:'center'   ,
        // width:'25%',
        // justifyContent:'space-between'
          },
          textStyle:{
            color:Colors.black,
            fontWeight:'700',
            fontSize:16,
            paddingLeft:12
          },
          mainView:{
            ...Layout.row,
            alignItems:'center',
            ...Gutters.regularLMargin
          },
          imageView:{
            height:90,width:90,borderRadius:45,borderColor:'#9B9DFD',borderWidth:1,alignItems:'center',justifyContent:'center'
          },
          imageStyle:{
            height:75,width:75,borderRadius:35
          },
          textView:{
            marginLeft:22
          },
          listStyle:{
            ...Layout.row,
            alignItems:'center',
          },
          viewStyle:{marginHorizontal:15},
          text:{
            color:Colors.black,
            fontSize:16,
            marginTop:15
          },
          NoteInput: {
            height: 200,
            borderRadius: 12,
            paddingVertical: 0,
            width: '98%',
          },
          createBtn:{
            width:'30%',
            alignSelf:'center',
            marginTop:'30%'
          }
    });
  }, [Layout]);
};

export default useSettingStyles;
