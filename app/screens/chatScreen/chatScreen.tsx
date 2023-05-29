import React, { FC, useState } from 'react';
import { View, Alert,Image,ImageBackground } from 'react-native';
import { Button, TextInput, AppText } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList } from '@/navigators';
import useChatScreenStyles from './ChatScreen.styles';
import assets from '@/assets';
import { Colors } from '@/themes/Variables';
import ViewDoctor from './component/viewDoctor';
import EnterCode from './component/enterCode';
import Chat from './component/chat';

const ChatScreen = () => {
  const S = useChatScreenStyles();


  return (
    <>
   {/* <ViewDoctor/> */}
   {/* <EnterCode/> */}
   <Chat/>
     </>

    
  );
};

export default ChatScreen;
