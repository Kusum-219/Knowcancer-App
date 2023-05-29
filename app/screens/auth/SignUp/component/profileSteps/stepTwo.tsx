import React, {FC, useState} from 'react';
import {View, Alert, TouchableOpacity,Text} from 'react-native';
import useSignUpScreenStyles from '../../SignUp.styles';
import {Button, TextInput, AppText, FormInput} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@/navigators';
import {Divider, List} from 'react-native-paper';
import { Colors } from '@/themes/Variables';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker'
import MIcon from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StepTwo = ({navigation,handlePress}) => {
  const S = useSignUpScreenStyles();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = React.useState(false);
  const onPress = () => setExpanded(!expanded);
  const language = ["English", "French", "Spanish"]

  return (
    <KeyboardAwareScrollView>
     
     <View style={{marginTop:10}}>
     <AppText.Title style={S.moreInfo}>MORE INFORMATION</AppText.Title>
      <View style={S.infoViewStyle}>
      <AppText.Subheading style={S.inputText}>
         Date Of Birth
          </AppText.Subheading>
         
        <TouchableOpacity onPress={() => setOpen(true)} style={S.inputViewStyle}>
<AppText.Text>{date?date?.toLocaleDateString():'DD/MM/YYYY'}</AppText.Text>
<MIcon
          // style={{marginLeft: 10,color:'red'}}
          size={20}
          name="calendar"
          color={'gray'}
          
        />
        </TouchableOpacity>
      {/* <Button title="Open" handlePress={() => setOpen(true)} /> */}
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
        {/* <View style={S.signUpStyle}> */}
          {/* <AppText.Subheading style={S.inputText}>Date of Birth</AppText.Subheading>
          <FormInput
            keyboardType="numeric"
            placeholder="DD/MM/YYYY"
            inputStyle={S.inputStyle}
            // leftIcon={'email-outline'}
            // primaryColor={errors.email ? Colors.error : Colors.btnColor}
            // value={values.email.replace(/\s/g, '')}
            handleChange={e => console.log(e)}
            // outlineColor={
            //   errors.email ? Colors.error : Colors.lighterGrey
            // }
            roundness={8}
          /> */}

          <AppText.Subheading style={S.inputText}>
          choose your communication way
          </AppText.Subheading>
          <SelectDropdown
	data={language}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
  defaultValue={'Language'}
  defaultButtonText='Language'
  dropdownStyle={{
    // width:'80%',
  }}
  buttonStyle={{width:'100%',backgroundColor:Colors.white,borderRadius:8,}}
// renderCustomizedRowChild={
//   <AppText.Text>hh</AppText.Text>
// }
// renderDropdownIcon={isOpened => {
//   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
// }}
renderCustomizedButtonChild={(selectedItem, index) => {
  console.log(selectedItem,'selectedItem');
  return (
    <View style={S.dropdown3BtnChildStyle}>
     
      <Text style={S.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'Language'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>
         
          {/* <FormInput
            placeholder="Language"
            inputStyle={S.inputStyle}
            // leftIcon={'email-outline'}
            // primaryColor={errors.email ? Colors.error : Colors.btnColor}
            // value={values.email.replace(/\s/g, '')}
            handleChange={e => console.log(e)}
            // outlineColor={
            //   errors.email ? Colors.error : Colors.lighterGrey
            // }
            roundness={8}
          /> */}
         
        
        </View>
     </View>
     <View style={{marginTop:10}}>
     <AppText.Title style={S.moreInfo}>HEALTH RECORD</AppText.Title>
      <View style={S.infoView}>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<View style={S.inputView}>
<AppText.Subheading style={S.inputText}>Age</AppText.Subheading>
          <FormInput
            keyboardType="numeric"
            placeholder="No. of Age"
            inputStyle={S.healthInput}
            // leftIcon={'email-outline'}
            // primaryColor={errors.email ? Colors.error : Colors.btnColor}
            // value={values.email.replace(/\s/g, '')}
            handleChange={e => console.log(e)}
            // outlineColor={
            //   errors.email ? Colors.error : Colors.lighterGrey
            // }
            roundness={8}
          />
</View>
 <View style={S.inputView}>
 <AppText.Subheading style={S.inputText}>Blood Group</AppText.Subheading>
          <FormInput
            placeholder=""
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
 </View>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<View style={S.inputView}>
<AppText.Subheading style={S.inputText}>Height</AppText.Subheading>
          <FormInput
            keyboardType="numeric"
            placeholder="Ex:150 CM"
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
</View>
 <View style={S.inputView}>
 <AppText.Subheading style={S.inputText}>Weight</AppText.Subheading>
          <FormInput
            keyboardType="numeric"
            placeholder="Ex:72 KG"
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
 </View>
</View>
<AppText.Subheading style={S.inputText}>Add Your Health Record</AppText.Subheading>
<TouchableOpacity onPress={() => setOpen(true)} style={S.inputViewStyle}>
<AppText.Text>View Report</AppText.Text>
<MIcon
          // style={{marginLeft: 10,color:'red'}}
          size={20}
          name="right"
          color={'gray'}
          
        />
        </TouchableOpacity>
        {/* <View style={S.signUpStyle}> */}
         
          {/* <AppText.Subheading style={S.inputText}>
          choose your communication way
          </AppText.Subheading>
          <FormInput
            keyboardType="numeric"
            placeholder="Language"
            inputStyle={S.inputStyle}
            // leftIcon={'email-outline'}
            // primaryColor={errors.email ? Colors.error : Colors.btnColor}
            // value={values.email.replace(/\s/g, '')}
            handleChange={e => console.log(e)}
            // outlineColor={
            //   errors.email ? Colors.error : Colors.lighterGrey
            // }
            roundness={8}
          /> */}
         
        
        </View>
     </View>
      {/* </View> */}
      <Button title="Done"  buttonStyle={S.nextBtn} handlePress={handlePress}/>
    </KeyboardAwareScrollView>
  );
};

export default StepTwo;
