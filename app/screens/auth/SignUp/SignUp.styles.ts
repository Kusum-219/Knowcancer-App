import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import useTheme from '@/hooks/useTheme';

export const useSignUpScreenStyles = () => {
  const {Layout, Gutters, Colors, Common} = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      mainView: {
        // flex:1,
        ...Gutters.regularVPadding,
        ...Gutters.smallHMargin,
        borderRadius: 14,
        ...Gutters.smallTMargin,

        backgroundColor: Colors.primary,
      },
      infoView:{
        ...Gutters.regularVPadding,
        ...Gutters.smallHMargin,
        borderRadius: 14,

        backgroundColor: Colors.primary,
        ...Gutters.smallHPadding
      },
      infoViewStyle:{
        ...Gutters.smallHMargin,
        borderRadius: 14,
        ...Gutters.regularBPadding,
        backgroundColor: Colors.primary,
        ...Gutters.smallHPadding
      },
      profileText: {
        ...Gutters.smallVMargin,
        ...Gutters.smallHMargin,
      },
      signUpStyle: {
        ...Gutters.regularHMargin,
        // flex:1
      },
      inputText: {
        color: Colors.white,
        ...Gutters.smallTMargin
      },
      inputStyle: {
        backgroundColor: Colors.white,
      },
      healthInput:{
        backgroundColor: Colors.white,
//  width:'100%'
      },
      inputView:{ width:'45%'},
      progressView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        ...Gutters.regularTMargin,
        ...Gutters.regularTMargin,
        // marginTop:20

      },
      progressBarView: {
        ...Layout.row,
        // ...Layout.justifyContentAround,
        // width: '88%',
        ...Layout.selfCenter,
        ...Gutters.regularHPadding,
        // ...Gutters.tinyHMargin,
      },
      circleText: {
        ...Layout.selfCenter,
        // ...Fonts.textSmall,
        color: Colors.primary,
      },
      divider: {
        width: 85,
        ...Layout.selfCenter,
        ...Gutters.smallVMargin,
        borderWidth: 1,
        borderColor: Colors.primary,
      },
      circle: {
        width: 45,
        height: 45,
        ...Layout.justifyContentCenter,
        borderRadius: 45 / 2,
        borderWidth: 2,
      },
      nextBtn: {
        width: '70%',
        ...Layout.selfCenter,
        ...Gutters.regularVMargin,
      },
      moreInfo:{
        color:Colors.black,
        paddingHorizontal:10
      },
      addNewBtn:{backgroundColor:Colors.primary,
    ...Gutters.smallHPadding,
    ...Gutters.smallVPadding
    },
    addtext:{
        color:Colors.white
    },
    recordView:{
        ...Layout.row,
        ...Layout.justifyContentBetween,
        ...Gutters.smallHMargin,
        ...Gutters.regularTMargin,
        ...Gutters.smallBMargin,
    },
    recordText:{
        fontWeight:'700'
    },
    inputViewStyle:{backgroundColor:Colors.white,padding:18,borderRadius:8,justifyContent:'space-between',flexDirection:'row',marginTop:8},
    dropdown3BtnStyle: {
      width: '100%',
      height: 50,
      // backgroundColor: 'red',
      // paddingHorizontal: 0,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#444',
    },
    dropdown3BtnChildStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical:15
      // backgroundColor:Colors.white
    },
    dropdown3BtnTxt: {
      color: '#727272',
      textAlign: 'center',
      // fontWeight: 'bold',
      fontSize: 16,
      // marginHorizontal: 12,
    },
    });
  }, []);
};

export default useSignUpScreenStyles;
