import {NavigatorParamList} from '@/navigators';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import useSignUpScreenStyles from './SignUp.styles';

import WelcomeScreen from '../login/components/welcome';
import SignInScreen from '../login/components/sign';
import OtpScreen from '../login/components/otp';
import SignUpProfileScreen from './component/profile';

const SignupScreen: FC<NativeStackScreenProps<NavigatorParamList, 'login'>> = ({
  navigation,
  route
//   index,setIndex
}) => {
  const S = useSignUpScreenStyles();
  const [index, setIndex] = useState('0');
const {signUp}=route?.params;
console.log(signUp,'signup');
  const renderComponent = () => {
    console.log(index,'index333');
    switch (index) {
      case '0':
        return (
          <WelcomeScreen
            handlePress={() => setIndex('1')}
            signUpScreen={signUp}
            navigation={navigation}
            // handleGooglesignUp={handleGoogleSignIn}
            // isShowLoader={isShowLoader}
            // setIsShowLoader={setIsShowLoader}
          />
        );
      case '1':
        return <SignInScreen handlePress={() => setIndex('2')} />;
      case '2':
        return (
          <OtpScreen
          handlePress={()=>setIndex('3')}
          // navigation={props.navigation}
          // load={isLoad}
          // setLoad={setIsLoad}
          // setPlanLoad={setPlanLoad}
          />
        );
        case '3':
            return (
              <SignUpProfileScreen
              handlePress={()=>setIndex('4')}
              // navigation={props.navigation}
              // load={isLoad}
              // setLoad={setIsLoad}
              // setPlanLoad={setPlanLoad}
              />
            );
          
      default:
        return null;
    }
  };
  return (
    <>
    {renderComponent()}
  </>
  );
};

export default SignupScreen;
