import React, { FC, useState } from 'react';
import { View, Alert, Image } from 'react-native';
import useSettingStyles from '../settingPage.styles';
import { Button, TextInput, AppText, FormInput } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList } from '@/navigators';
import ProfileScreen from './component/profilePage';
import assets from '@/assets';
import { Colors } from '@/themes/Variables';

const SupportTicket = ({
  navigation,
}) => {
  const S = useSettingStyles();


  return (
     <>
           <View style={S.topView}>
        <Image source={assets.arrow} />
        <AppText.Text style={S.textStyle}>Create Your support Tickets</AppText.Text>
      </View>
      <View>

      <View style={S.viewStyle}>
        <AppText.Text style={S.text}>Complaint About</AppText.Text>
        <FormInput
        placeholder='Topic'
        roundness={8}
        placeholderTextColor={Colors.gray}
        />
      </View>
      <View style={S.viewStyle}>
        <AppText.Text style={S.text}>Description</AppText.Text>
        <FormInput
        placeholder='Write Your Concern'
        roundness={8}
        placeholderTextColor={Colors.gray}
        multiline={true}
        numberOfLines={2}
        inputStyle={S.NoteInput}
        />
      </View>
      <View style={S.viewStyle}>
        <AppText.Text style={S.text}>Attachment</AppText.Text>
        <FormInput
        placeholder='Attach Photo or File'
        roundness={8}
        placeholderTextColor={Colors.gray}
        inputStyle={{width:'50%'}}
        />
      </View>
     
      </View>
      <Button title='Create' buttonStyle={S.createBtn}/>
     </>
  );
};

export default SupportTicket;
