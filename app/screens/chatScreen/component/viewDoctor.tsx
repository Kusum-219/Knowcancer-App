import React, { FC, useState } from 'react';
import { View, Alert,Image,ImageBackground,TouchableOpacity } from 'react-native';
import { Button, TextInput, AppText } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList, RoutesConstant } from '@/navigators';
import useChatScreenStyles from '../ChatScreen.styles';
import assets from '@/assets';
import { Colors } from '@/themes/Variables';

const ViewDoctor = ({navigation}) => {
  const S = useChatScreenStyles();
const Data =[
  {
    name:'DR. James',
    text:'Lorem Ipsum is simply dummytext of the printing.',
    date:'23:02:2023'
  },
  {
    name:'DR. Ron',
    text:'Lorem Ipsum is simply dummytext of the printing.',
    date:'26:02:2023'
  }
]

  return (
    <>
    <View style={S.topView}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={assets.arrow}/>

      </TouchableOpacity>
      <AppText.Text style={S.textStyle}>View Doctor</AppText.Text>
    </View>
    <View style={S.container}>
   {Data.map((item)=>{
    return (
      <ImageBackground  source={assets.cardBg} style={{width:'100%',paddingVertical:24,height:200,}}   resizeMode="stretch">
 <View style={{justifyContent:'space-between',flex:1}}>
 <View style={{flexDirection:'row',paddingHorizontal:30}}>
  <Image
    source={assets.profilePhoto}
    style={{height:60,width:60,borderRadius:30}}
    />
    <View style={{marginHorizontal:15}}>
      <AppText.Title>{item?.name}</AppText.Title>
      <AppText.Text style={{color:Colors.lightGrey}}>{item?.text}</AppText.Text>
    </View>
    
  </View>
<View style={{marginHorizontal:25,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<AppText.Text style={{color:Colors.lightGrey}}>Last Connected:<AppText.Text style={{color:Colors.black}}>{item?.date}</AppText.Text></AppText.Text>
<Button 
 title='Connect Again'
 type='text'
 labelStyle={{color:Colors.primary}}
/>
</View>
 </View>
          </ImageBackground>
    )
   })}
          {/* <ImageBackground  source={assets.cardBg} style={{width:'100%',paddingVertical:24,height:200,}}   resizeMode="stretch">
          </ImageBackground> */}

     </View>
     <Button
      title='Add Doctor'
      buttonStyle={{width:'30%',alignSelf:'center',marginBottom:'15%'}}
      handlePress={()=>navigation.navigate(RoutesConstant.ENTERCODE)}
      />
     </>

    
  );
};

export default ViewDoctor;
