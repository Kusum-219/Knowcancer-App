import React, { FC, useState } from 'react';
import { View, Alert,Image, ImageBackground } from 'react-native';
import { Button, TextInput, AppText, Header } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList, RoutesConstant } from '@/navigators';
import useHomeStyles from './HomeScreen.styles';
import assets from '@/assets';
import { Colors } from '@/themes/Variables';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HomeScreen = ({navigation}) => {
  const S = useHomeStyles();
  const DATA = [
    {
      title: 'Choose Your Doctor',
      btntitle:'View Doctor',
      asset:assets.femaleDoctor,
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      navigate:()=>navigation.navigate(RoutesConstant.VIEW_DOCTOR)
    },
    {
      title: 'Chat & Consultant',
      btntitle:'Connect',
      asset:assets.womenChatBot,
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'


    },
    {
      title: 'Video Tutorial',
      btntitle:'Watch Video',
      asset:assets.onlineEducation,
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'


    },
  ];

  return (
    <View style={S.container}>
      <Header/>
      <KeyboardAwareScrollView style={S.mainView} showsVerticalScrollIndicator={false}>
      <AppText.Title style={S.textStyle}>Welcome to <AppText.Headline style={S.headlineStyle}>k<AppText.Headline style={[S.headlineStyle,{color:Colors.secondary}]}>NO</AppText.Headline>wcancer.in</AppText.Headline></AppText.Title>
     <AppText.Text style={S.textStyle}>Bringing Cancer Treatment and help on Chat !!</AppText.Text>
    
    {
      DATA.map((item,index)=>{
        const num = index%2!=0
        return (
          <>
          <AppText.Text style={S.text}>{item?.title}</AppText.Text>
          <ImageBackground  source={assets.cardBg} style={{width:'92%',paddingVertical:24,left:num?'14%':0}}   resizeMode="stretch">
          <View style={{flexDirection: num?'row-reverse':'row',width:'92%',alignContent:'center',alignItems:'center',justifyContent:'space-around',borderRadius:8,}}>
             <Image 
             source={item?.asset}
             style={{}}
             />
           <View style={{justifyContent:'space-between'}}>
           <AppText.Text style={{width:110,color:Colors.lightGrey}}>{item?.text}</AppText.Text>
             <Button 
             title={item?.btntitle}
             buttonStyle={{width:'100%',marginLeft:num?10:0}}
             handlePress={item?.navigate}
             />
           </View>
             </View>
          </ImageBackground>
          </>

        )
      })
    }

      </KeyboardAwareScrollView>
      
     {/* <View style={{height:150,width:'88%',marginHorizontal:10,marginVertical:20}}>
      <View style={{flexDirection:'row',height:150,width:'90%',borderColor:'red',borderWidth:1,alignContent:'center',alignItems:'center',justifyContent:'space-around',borderRadius:8,}}>
        <Image 
        source={assets.femaleDoctor}
        style={{}}
        />
        <Button 
        title='View Doctor'
        buttonStyle={{width:'40%'}}
        />
      </View>
     </View>
     <View style={{height:150,width:'88%',marginHorizontal:10,marginVertical:15}}>
      <AppText.Text>Start chat</AppText.Text>
      <View style={{flexDirection:'row',height:150,width:'90%',borderColor:'red',borderWidth:1,alignContent:'center',alignItems:'center',justifyContent:'space-around',borderRadius:8,marginLeft:40,}}>
      <Button 
        title='Start Chat'
        buttonStyle={{width:'40%'}}
        />
        <Image 
        source={assets.womenChatBot}
        style={{}}
        />
       
      </View>
     </View>
     <View style={{height:150,width:'88%',marginHorizontal:10,marginVertical:15}}>
      <AppText.Text>Choose Your Doctor</AppText.Text>
      <View style={{flexDirection:'row',height:150,width:'90%',borderColor:'red',borderWidth:1,alignContent:'center',alignItems:'center',justifyContent:'space-around',borderRadius:8,}}>
        <Image 
        source={assets.onlineEducation}
        style={{}}
        />
        <Button 
        title='View Doctor'
        buttonStyle={{width:'40%'}}
        />
      </View>
     </View> */}
    </View>
  );
};

export default HomeScreen;
