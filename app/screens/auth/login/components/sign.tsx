import React, { FC, useState } from 'react';
import { View, Alert,Image, TouchableOpacity } from 'react-native';
import { Button, TextInput, AppText, FormInput } from '@/components';
import useLoginScreenStyles from '../Login.styles';
import assets from '@/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RoutesConstant } from '@/navigators';

const SignInScreen = ({handlePress,navigation,route}) => {
  const S = useLoginScreenStyles();
  const {signUpScreen}=route?.params;

  const [userName, setUserName] = useState('');
  const [errorUserName, setErrorUserName] = useState(false);
  const [phoneNumber,setPhnNumber]=useState()

  const setUserNameText = (val) => {
    setUserName(val);
    setErrorUserName(false);
  };

  const loginHandle = () => {
    if (userName !== '') {
      Alert.alert('Mail Sent');
    } else {
      setErrorUserName(true);
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex:1}}>

    
    
    
    <View style={S.container}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
     <Image
      source={assets.arrow}
      style={{marginHorizontal:25,marginBottom:30}}
      />
     </TouchableOpacity>
    <Image
      style={[S.signInImage,{marginBottom:30}]}
      source={assets.signIn2}
      resizeMode="cover"
    />
   <View style={S.viewStyle}>
   <AppText.Title style={S.signInText}>{signUpScreen?'Sign Up':'Sign In'}</AppText.Title>
    <AppText.Text style={{paddingHorizontal:8,color:'#727272',lineHeight:24}}>{`${signUpScreen?'SignUp':'Sign in'} to access your, health tips and more!`}</AppText.Text>
    <View style={S.loginStyle}>
    <FormInput
              keyboardType="numeric"
              placeholder="Enter Mobile No."
              inputStyle={[S.inputStyle,{marginTop:15}]}
              // leftIcon={'email-outline'}
              // primaryColor={errors.email ? Colors.error : Colors.btnColor}
              value={phoneNumber}
              handleChange={e => setPhnNumber(e)}
              maxLength={10}  
              // outlineColor={
              //   errors.email ? Colors.error : Colors.lighterGrey
              // }
              roundness={8}
            />
            <AppText.Text style={{fontWeight:'700',fontSize:20,position:'absolute',bottom:17,left:15}}>+91</AppText.Text>
          </View>
  <Button 
           title='Continue'
           buttonStyle={S.signInContBtn}
           handlePress={()=>{
          signUpScreen?  navigation.navigate(RoutesConstant.OTP,{
              signUpScreen:true
                // signUp:false
            })
            :
            navigation.navigate(RoutesConstant.OTP,{
              signUpScreen:false
            })
           }}
          
          />
        
   </View>
  {/* <View style={{height:'100%'}}> */}

  {/* </View> */}
    </View>

   {/* <View style={{flex:0.15}}> */}
  
   {/* </View> */}
          </KeyboardAwareScrollView>
  );
};

export default SignInScreen;
