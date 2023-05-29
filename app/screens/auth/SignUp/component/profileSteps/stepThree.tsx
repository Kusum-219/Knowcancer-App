import React, {FC, useState} from 'react';
import {View, Alert,TouchableOpacity, Image} from 'react-native';
import useSignUpScreenStyles from '../../SignUp.styles';
import {Button, TextInput, AppText, FormInput} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@/navigators';
import {Divider} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/themes/Variables';
import assets from '@/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StepThree = ({navigation,handlePress,handleAddNew}) => {
  const S = useSignUpScreenStyles();

 
  return (
    <>
    <View style={S.recordView}>
    <AppText.Subheading style={S.recordText}>
        VIEW HEALTH RECORD
     </AppText.Subheading>
     <TouchableOpacity style={S.addNewBtn} onPress={handleAddNew}>
<AppText.Text style={S.addtext}>+ Add New</AppText.Text>
     </TouchableOpacity>
    </View>
    <KeyboardAwareScrollView>
    <View style={[S.recordView,{paddingHorizontal:22}]}>
     <AppText.Text style={{color:'gray'}}>Updated On</AppText.Text>
<AppText.Text style={{color:'black'}}>23.03.202</AppText.Text>

     </View>
    
     <View style={{width:'100%',}}>
     <Image
     source={assets.record}
     style={{height:400,width:'100%'}}
     resizeMode='contain'
     />
</View>
<View style={[S.recordView,{paddingHorizontal:22}]}>
     <AppText.Text style={{color:'gray'}}>Updated On</AppText.Text>
<AppText.Text style={{color:'black'}}>23.03.202</AppText.Text>

     </View>
    
     <View style={{width:'100%',}}>
     <Image
     source={assets.record}
     style={{height:400,width:'100%'}}
     resizeMode='contain'
     />
</View>
      <Button title="Done"  buttonStyle={S.nextBtn} handlePress={handlePress}/>
    </KeyboardAwareScrollView>
    </>
  );
};

export default StepThree;
