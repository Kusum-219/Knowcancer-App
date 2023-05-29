import { StyleSheet,Dimensions } from 'react-native';
import { useMemo } from 'react';
import useTheme from '@/hooks/useTheme';

export const useLoginScreenStyles = () => {
  const { Layout, Gutters, Colors, Common } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      container:{
        flex:1,
        ...Gutters.largeTMargin,
        // backgroundColor:'red'
        // alignContent:'center',
        // alignItems:'center'
      },
      mainView:{
        // alignItems:'center',
         paddingHorizontal:14,
      },
      introImageStyle: {
        height:Dimensions.get('screen').height *0.45
        // width: 350,
        // height: 200,
      },
      signInImage:{
        height:Dimensions.get('screen').height *0.35,
        ...Gutters.smallBMargin,
   width:'75%',
   alignSelf:'center'
      },
      headingText:{
fontSize:30,
textAlign:'center',
fontWeight:'700',
...Gutters.regularVMargin
      },
      textStyle:{
        letterSpacing:0.5,
        textAlign:'center',
fontSize:17
      },
      viewStyle:{
        paddingHorizontal:20,
        // alignItems:'center'
        // ...Layout.justifyContentCenter
      },
      signInText:{
        ...Gutters.smallVMargin,
        fontWeight:'700'
      },
      titleStyle:{
        textAlign:'center'
        // ...Layout.textAlignCenter
        // marginTop:25
      },
      loginStyle: {
        ...Gutters.tinyHMargin
        // ...Gutters.xsHMargin,
        // flex:1
      },
      inputText:{
        color:Colors.primary,
        fontWeight:'700',
        marginTop:10,
        marginBottom:5
      },
      inputStyle: {fontSize: 16, paddingVertical: 0,paddingLeft:50},
      textViewStyle:{
        ...Layout.row,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20
      },
      resendLabel:{
        color:Colors.secondary
      },
      btnView:{
        flex:0.2
      },
      continueBtn:{
        width:'70%',
        ...Layout.selfCenter,
        // marginBottom:40
        // flex:
        // ...Gutters.largeBMargin
      },
      signInContBtn:{
        width:'70%',
        ...Layout.selfCenter,
        marginTop:50,
        // flex:0.1  
      },
      dividerLine:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      policyView: {
        ...Layout.row,
        ...Layout.selfCenter,
        ...Gutters.xmTMargin,
        ...Gutters.smallBMargin,
        ...Layout.fill,
        flexWrap: 'wrap',
        // ...Gutters.tinyHMargin,
        marginHorizontal: 16,
        justifyContent:'center'
        // alignItems:'center'
      },
      signup:{
        color:Colors.secondary
      },
    
      underlineStyleBase: {
        // width: 30,
        // height: 45,
        borderWidth: 1,
        borderRadius:6,
        color:'black',
        borderColor:'gray',
        backgroundColor:'#F8FAFD'
        // borderBottomWidth: 2,
        
      },

    });
  }, []);
};

export default useLoginScreenStyles;
