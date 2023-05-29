import React, { FC, useState } from 'react';
import { View, Alert, Image, TouchableOpacity } from 'react-native';
import { Button, TextInput, AppText } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList } from '@/navigators';
import useSignUpScreenStyles from '../../SignUp.styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/themes/Variables';
import assets from '@/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddPhotoScreen =({handlePress}) => {
    const S = useSignUpScreenStyles();


  return (
   <KeyboardAwareScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
   {/* <MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={18}
                name="arrow-back-ios"
              color={Colors.primary}
             />   */}
   <AppText.Subheading style={{fontWeight:'700',marginTop:15}}>ADD NEW</AppText.Subheading>
   </View>
   <View>
   <AppText.Title style={{fontSize:16,fontWeight:'700',marginVertical:30,paddingHorizontal:15}}>Add Photo or Pdf Format</AppText.Title>
  <TouchableOpacity style={{height:400,width:'95%',color:'red',borderRadius:8,borderWidth:1,marginHorizontal:10,borderColor:'red',justifyContent:'center',alignItems:'center',marginBottom:20}}>
    <Image
    source={assets.photoUpload}
    style={{bottom:'12%'}}
    />
<AppText.Text>Click Here to Upload</AppText.Text>
  </TouchableOpacity>
   </View>
         <Button title="Done"  buttonStyle={S.nextBtn} handlePress={handlePress}/>

   </KeyboardAwareScrollView>
    

        
  );
};

export default AddPhotoScreen;
