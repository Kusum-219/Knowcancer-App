import React, { FC, useState } from 'react';
import { View, Alert, Image } from 'react-native';
import useHeaderStyles from './header.style';
import { Button, TextInput, AppText } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList } from '@/navigators';
import assets from '@/assets';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const Header = ({
  navigation,
}) => {
  const S = useHeaderStyles();
 

  return (
    <View style={S.container}>
        <View style={S.contentHeader}>
            <Image 
            source={assets.whiteArrow}
            />
             <Image 
            source={assets.dummyImg}
            style={S.imageStyle}
            />
        <AppText.Text style={S.nameStyle}>Nikhil</AppText.Text>
        </View>

        {/* <Image 
            source={assets.location}
            style={S.imageStyle}
            /> */}

                   <View style={S.locationStyle}>
{/* <View style={{backgroundColor:'black',overflow:'hidden'}}> */}
<IoniconsIcons name='location-sharp' size={18} color='white' style={{}}/>

{/* </View> */}
                
            <AppText.Text style={S.nameStyle}>Bangalore , HSR</AppText.Text>

            </View>
    </View>
  );
};

export default Header;
