import React, { FC, useState } from 'react';
import { View, Alert } from 'react-native';
import useForgotPasswordStyles from './ForgotPassword.styles';
import { Button, TextInput, AppText } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList } from '@/navigators';

const ForgotPasswordScreen: FC<NativeStackScreenProps<NavigatorParamList, 'forgotPassword'>> = ({
  navigation,
}) => {
  const S = useForgotPasswordStyles();
  const [userName, setUserName] = useState('');
  const [errorUserName, setErrorUserName] = useState(false);

  const setUserNameText = (val) => {
    setUserName(val);
    setErrorUserName(false);
  };

  const loginHandle = () => {
    if (userName !== '') {
      Alert.alert('Mail Sent');
    } else {
      setErrorUserName(true);
    }
  };

  return (
    <View style={S.container}>
      <AppText.Headline>Reset Password</AppText.Headline>
      <AppText.Text style={S.bottomMargin}>
        Please enter the email address you'd like your password reset information sent to.
      </AppText.Text>
      <TextInput
        label="Email Address"
        placeholder="Email Address"
        handleChange={(val) => setUserNameText(val)}
      />
      {errorUserName ? (
        <AppText.Text style={S.errorTextColor}>Type your username</AppText.Text>
      ) : null}
      <View style={[S.buttonContainer]}>
        <View style={S.loginButtonContainer}>
          <AppText.Paragraph>Go back to</AppText.Paragraph>
          <Button
            type="text"
            compact
            handlePress={() => navigation.navigate('login')}
            title="Login"
            labelStyle={S.loginButtonLabel}
          />
        </View>

        <Button title={'Submit'} compact handlePress={loginHandle} buttonStyle={S.buttonStyle} />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
