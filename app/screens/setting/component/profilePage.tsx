import React, {FC, useState} from 'react';
import {View, Alert, Image,TouchableOpacity} from 'react-native';
import useSettingStyles from '../settingPage.styles';
import {Button, TextInput, AppText} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList, RoutesConstant} from '@/navigators';
import assets from '@/assets';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import { Colors } from '@/themes/Variables';

const ProfileScreen = ({navigation}) => {
  const S = useSettingStyles();

  const DATA = [
    {
      title: 'My Profile',
      navigation:navigation.navigate(RoutesConstant.PROFILE_DESCRIPTION,{
        index:1
      })
    },
    {
      title: 'My Health Records',
      navigation:navigation.navigate(RoutesConstant.PROFILE_DESCRIPTION,{
        index:2
      })
    },
    {
      title: 'Invites Friends',
      navigation:navigation.navigate(RoutesConstant.PROFILE_DESCRIPTION,{
        index:3
      })
    },
    {
      title: 'Supports',
      navigation:navigation.navigate(RoutesConstant.PROFILE_DESCRIPTION,{index:4})
    },
  ];
  const PROFILEDATA = [
    {
      title: 'About Us',
    },
    {
      title: 'Terms and Conditions',
    },
    {
      title: 'Privacy & Policy',
    },
  ];
  return (
    <>
      <View style={S.topView}>
        <Image source={assets.arrowBack} />
        <AppText.Text style={S.textStyle}>Profile</AppText.Text>
      </View>
      <View style={S.mainView}>
        <View style={S.imageView}>
          <Image source={assets.dummyImg} style={S.imageStyle} />
        </View>
        <View style={S.textView}>
          <AppText.Title style={{fontWeight: '800'}}>Ajay Kumar</AppText.Title>
          <AppText.Text>ajay.kumar@gmail.com</AppText.Text>
          <AppText.Text style={{fontWeight: '500', color: 'black',marginTop:4}}>
            Registered Since Dec 202X
          </AppText.Text>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 40}}>
        {DATA.map(item => {
          return (
            <>
              <TouchableOpacity style={S.listStyle} onPress={()=>item?.navigation}>
                <OcticonsIcons name="three-bars" color={'black'} size={15} />
                <AppText.Text style={{marginLeft: 15,fontSize:16,color:Colors.black}}>
                  {item?.title}
                </AppText.Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderStyle: 'dashed',
                  zIndex: 0,
                  marginVertical: 15,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: 1,
                    backgroundColor: 'white',
                    zIndex: 1,
                  }}
                />
              </View>
            </>
          );
        })}
        {PROFILEDATA.map(item => {
          return (
            <AppText.Text style={{marginHorizontal: 25, marginVertical: 10,fontSize:16,color:Colors.black}}>
              {item?.title}
            </AppText.Text>
          );
        })}

        <View style={[S.listStyle, {marginTop: 25}]}>
          <OcticonsIcons name="three-bars" color={'black'} size={15} />
          <AppText.Text style={{marginLeft: 15,fontSize:16,color:Colors.black}}>Logout</AppText.Text>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
