import {AppText, Button, FormInput} from '@/components';
import {NavigatorParamList, RoutesConstant} from '@/navigators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  KeyboardAwareScrollView,
  StyleSheet,
} from 'react-native-keyboard-aware-scroll-view';
import {get} from 'lodash-es';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {FC, useState} from 'react';
import {View, Alert, Image, TouchableOpacity} from 'react-native';
import useLoginScreenStyles from '../Login.styles';
import {urls} from '@/config/Constants';
// import asset from '@/screens/onboard/assets';
import assets from '@/assets/index';
import {Colors} from '@/themes/Variables';

const WelcomeScreen = ({
    handlePress,
    navigation,
    route,
    
    signUpHandlePress
}) => {
  const S = useLoginScreenStyles();
  const {signUpScreen}=route?.params;
  console.log(signUpScreen,'999');
  const [phoneNumber,setPhnNumber]=useState()
  return (
    <KeyboardAwareScrollView>
      <View style={S.container}>
        <View
          style={
            {
              // height: screenHeight *0.5,
              // marginTop: 20,
              // justifyContent: 'center',
              // height:100,
              // width:'100%',
              marginTop:30
            }
          }>
          <Image
            style={S.signInImage}
            source={assets.signIn1}
            resizeMode="stretch"
          />
        </View>
        <View style={S.mainView}>
          <AppText.Headline style={S.headingText}>
            {`Welcome to\n k`}
            <AppText.Headline
              style={{color: Colors.secondary, fontWeight: '700', fontSize: 30}}>
              NO
            </AppText.Headline>
            wcancers.in
          </AppText.Headline>
          <AppText.Text style={S.textStyle}>
            The best online & consultation app of the century for your health
            and medical needs!
          </AppText.Text>
          <View style={S.loginStyle}>
            <AppText.Subheading style={S.inputText}>
              PHONE NUMBER
            </AppText.Subheading>
            <FormInput
              keyboardType="numeric"
              placeholder="Enter Mobile No."
              inputStyle={S.inputStyle}
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

          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <AppText.Text style={{textAlign:'center'}}>or continue with</AppText.Text>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View> */}
          {/* <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

                  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> */}
          <View style={{flexDirection: 'row', alignItems: 'center',padding:18}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <AppText.Text style={{textAlign: 'center', paddingHorizontal: 8}}>
                or continue with
              </AppText.Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center',paddingBottom:15}}>
            <TouchableOpacity
              style={{
                height: 62,
                width: 62,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 25,
              }}
              onPress={()=>{ 
                signUpScreen?
                navigation.navigate(RoutesConstant.LOGIN,{
                  signUpScreen:true
                    // signUp:false
                })
                :
                navigation.navigate(RoutesConstant.LOGIN,{
                  signUpScreen:false
                })}}
              >
              <Image
                source={assets.facebookIcon}
                height={32}
                width={32}
                style={{height: 35, width: 35, borderRadius: 18}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 62,
                width: 62,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={assets.googleIcon}
                height={30}
                width={30}
                style={{height: 35, width: 35, borderRadius: 18}}
              />
            </TouchableOpacity>
          </View>

          <View style={S.policyView}>
            <AppText.Text>If you don't have account,</AppText.Text>
            <TouchableOpacity onPress={()=>
            
           { 
            signUpScreen?
            navigation.navigate(RoutesConstant.WELCOME,{
              signUpScreen:false
                // signUp:false
            })
            :
            navigation.navigate(RoutesConstant.WELCOME,{
              signUpScreen:true
            })}
            
            }>
              <AppText.Text style={S.signup}>{signUpScreen?'Sign in':'Sign up'}</AppText.Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default WelcomeScreen;
