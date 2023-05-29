import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import useTheme from '@/hooks/useTheme';

export const useChatScreenStyles = () => {
  const { Layout, Gutters, Colors, Common } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      container: {
...Gutters.smallHMargin,
...Gutters.smallVMargin  ,
flex:2       
      },
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
      underlineStyleBase: {
        // width: 30,
        // height: 45,
        borderWidth: 1,
        borderRadius:6,
        color:'black',
        // borderColor:'gray',
        // borderC
        // backgroundColor:'#F8FAFD'
        // borderBottomWidth: 2,
        
      },
      title:{

        ...Gutters.regularHMargin,
        paddingLeft:20
        // justifyContent:'center',
        // width:'40%'
      },
      titleStyle:{
        fontSize:22,color:Colors.black,...Gutters.regularHMargin,textAlign:'center',...Gutters.regularTMargin
      },
                  buttonStyle:{
                    backgroundColor:Colors.gray,
                    width:'40%',
                    borderRadius:10
                  },
                  labelStyle:{
                    color:Colors.black 
                  },
                  questionText:{
                    marginVertical:15,
                    marginHorizontal:8,
                    color:Colors.grey
                  },

    });
  }, []);
};

export default useChatScreenStyles;
