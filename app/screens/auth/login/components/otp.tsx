import React, { FC, useEffect, useState } from 'react';
import { View, Alert,Image, TouchableOpacity } from 'react-native';
import { Button, AppText, FormInput } from '@/components';
import useLoginScreenStyles from '../Login.styles';
import assets from '@/assets';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { RoutesConstant } from '@/navigators';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const OtpScreen = ({route,navigation}) => {
  const {signUpScreen}=route?.params;
console.log(signUpScreen,'signUpScreenOTPPPPP');
  const S = useLoginScreenStyles();
  const [userName, setUserName] = useState('');
  const [errorUserName, setErrorUserName] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  let timer = () => {};

    const startTimer = () => {
        timer = setTimeout(() => {
            if(timeLeft <= 0){
                clearTimeout(timer);
                return false;
            }
         setTimeLeft(timeLeft-1);
        }, 1000)
     }

     useEffect(() => {
         startTimer();
         return () => clearTimeout(timer);
     });    

    const start = () => {
        setTimeLeft(30);
        clearTimeout(timer);
        startTimer();
    }

  const loginHandle = () => {
    if (userName !== '') {
      Alert.alert('Mail Sent');
    } else {
      setErrorUserName(true);
    }
  };

  return (
    <KeyboardAwareScrollView>
    <View style={S.container}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
     <Image
      source={assets.arrow}
      style={{marginHorizontal:25,marginBottom:30}}
      />
     </TouchableOpacity>
    <Image
      style={[S.signInImage,{marginBottom:50}]}
      source={assets.signIn3}
      resizeMode="stretch"
    />
    
   <View style={S.viewStyle}>
   <AppText.Title style={S.titleStyle}>We have sent 6 digit OTP</AppText.Title>

   <OTPInputView
    style={{width: '95%', height: 80,}}
    pinCount={6}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    // autoFocusOnLoad
    
    codeInputFieldStyle={S.underlineStyleBase}
    // codeInputHighlightStyle={S.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/>

   </View>
   <View style={S.textViewStyle}>
<AppText.Text>Waiting for OTP... {timeLeft} Sec</AppText.Text>
<Button title='Resend OTP' type='text' labelStyle={S.resendLabel} handlePress={start}/>
</View>
         
    </View>

   {/* <View style={S.btnView}> */}
   <Button 
     title='Done'
     buttonStyle={S.signInContBtn}
    handlePress={()=>
      signUpScreen?
      navigation.navigate(RoutesConstant.PROFILE,{
        signUpScreen:true
          // signUp:false
      })
      :
      navigation.navigate(RoutesConstant.HOME_PAGE,{
        signUpScreen:false
      })
    }
    />
   {/* </View> */}
    </KeyboardAwareScrollView >
  );
};

export default OtpScreen;
