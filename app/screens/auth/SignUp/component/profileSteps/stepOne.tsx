import React, {FC, useState} from 'react';
import {View, Alert, Image, TouchableOpacity} from 'react-native';
import useSignUpScreenStyles from '../../SignUp.styles';
import {Button, TextInput, AppText, FormInput} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@/navigators';
import {Divider} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/themes/Variables';
import assets from '@/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StepOne = ({navigation,handlePress}) => {
  const S = useSignUpScreenStyles();
  const [selected, setSelected] = useState();

  const Gender = [
    {
      id:1,
      name: 'Male',
    },
    {
      id:2,
      name: 'Female',
    },
    {
      id:3,
      name: 'Other',
    },
  ];
  return (
    <KeyboardAwareScrollView>
     
      {/* <AppText.Text style={S.profileText}>Profile Picture</AppText.Text> */}
      <View style={[S.mainView,{marginTop:40}]}>
        <View
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems:'center',
            justifyContent:'center'
          }}>
 <Image
      style={{height:72,width:72,}}
      source={assets.profile}
      resizeMode="cover"
    />

          </View>
        <AppText.Text style={{textAlign: 'center', color: 'white',marginVertical:15}}>
          Add Your Profile Picture
        </AppText.Text>

        <View style={S.signUpStyle}>
          <AppText.Subheading style={S.inputText}>Full Name</AppText.Subheading>
          <FormInput
            placeholder="Enter Your name"
            inputStyle={S.inputStyle}
            // leftIcon={'email-outline'}
            // primaryColor={errors.email ? Colors.error : Colors.btnColor}
            // value={values.email.replace(/\s/g, '')}
            handleChange={e => console.log(e)}
            // outlineColor={
            //   errors.email ? Colors.error : Colors.lighterGrey
            // }
            roundness={8}
          />

          <AppText.Subheading style={S.inputText}>
            Email Address
          </AppText.Subheading>
          <FormInput
            placeholder="Enter Your Email address"
            inputStyle={S.inputStyle}
            // leftIcon={'email-outline'}
            // primaryColor={errors.email ? Colors.error : Colors.btnColor}
            // value={values.email.replace(/\s/g, '')}
            handleChange={e => console.log(e)}
            // outlineColor={
            //   errors.email ? Colors.error : Colors.lighterGrey
            // }
            roundness={8}
          />
          <AppText.Subheading style={S.inputText}>
            Phone Number
          </AppText.Subheading>
          <FormInput
            keyboardType="numeric"
            placeholder="Enter Your Phone No."
            inputStyle={S.inputStyle}
            // leftIcon={'email-outline'}
            // primaryColor={errors.email ? Colors.error : Colors.btnColor}
            // value={values.email.replace(/\s/g, '')}
            handleChange={e => console.log(e)}
            // outlineColor={
            //   errors.email ? Colors.error : Colors.lighterGrey
            // }
            roundness={8}
          />
          <AppText.Subheading style={S.inputText}>Gender</AppText.Subheading>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {Gender.map(i => {
              return (
                <TouchableOpacity onPress={()=>setSelected(i?.id)}>
                  <View
                  style={{
                    width: 100,
                    backgroundColor: selected==i?.id?Colors.primary:Colors.white,
                    borderRadius: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    borderColor: selected==i?.id?Colors.white:Colors.white,
                    borderWidth: selected==i?.id?1:0,


                  }}>
                  <AppText.Text style={{color:selected==i?.id?Colors.white:'#131A42'}}>{i?.name}</AppText.Text>
                </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
      <Button title="Next"  buttonStyle={S.nextBtn} handlePress={handlePress}/>
    </KeyboardAwareScrollView>
  );
};

export default StepOne;
