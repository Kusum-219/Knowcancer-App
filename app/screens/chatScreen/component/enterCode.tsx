import React, { FC, useState } from 'react';
import { View, Alert,Image,ImageBackground,TouchableOpacity } from 'react-native';
import { Button, TextInput, AppText } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList } from '@/navigators';
import useChatScreenStyles from '../ChatScreen.styles';
import assets from '@/assets';
import { Colors } from '@/themes/Variables';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EnterCode = ({navigation}) => {
  const S = useChatScreenStyles();
  const [timeLeft, setTimeLeft] = useState(30);


  return (
    <KeyboardAwareScrollView>
    <View style={S.topView}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={assets.arrow}/>

      </TouchableOpacity>
      <AppText.Text style={S.textStyle}>Enter Code</AppText.Text>
    </View>
    <View style={S.container}>
   {/* <ImageBackground  source={assets.codeImg} style={{marginVertical:24,height:300,paddingHorizontal:10 ,alignItems:'center',justifyContent:'center'}}   resizeMode="stretch"> */}
        <View style={{marginVertical:24,height:200,paddingHorizontal:10 ,alignItems:'center',justifyContent:'center'}}>
        <AppText.Text style={{paddingHorizontal:12,color:Colors.black,fontSize:16}}>
        Enter the 6 digit code received on your registered mobile number
        </AppText.Text>
        {/* <OTPInputView
    style={{width: '90%', height: 80,marginTop:25}}
    pinCount={6}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    // autoFocusOnLoad
    
    codeInputFieldStyle={S.underlineStyleBase}
    // codeInputHighlightStyle={S.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/> */}

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

          {/* </ImageBackground> */}
        
     
     </View>
      <Button
      title='Done'
      buttonStyle={{width:'30%',alignSelf:'center',marginBottom:30,justifyContent:'center'}}
      />
     </KeyboardAwareScrollView>

    
  );
};

export default EnterCode;
