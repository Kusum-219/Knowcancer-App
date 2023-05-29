import {NavigatorParamList, RoutesConstant} from '@/navigators';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import useLoginScreenStyles from './Login.styles';

import WelcomeScreen from './components/welcome';
import SignInScreen from './components/sign';
import OtpScreen from './components/otp';
import SignUpProfileScreen from '../SignUp/component/profile';

const LoginScreen = ({navigation}) => {
  const S = useLoginScreenStyles();
  const [index, setIndex] = useState('0');
  // React.useEffect(() => {
  //  renderComponent()
  // }, [index]);  
  
  // const renderComponent = () => {
  //   console.log('object');
  //   console.log(index,'index');
  //   switch (index) {
  //     case '0':
  //       return (
  //         // <WelcomeScreen
  //         //   handlePress={() =>setIndex('1')}
  //         //   navigation={navigation}
           
  //         // />
  //       );
  //     case '1':
  //       return (
  //         // <SignInScreen handlePress={() => setIndex('2')}  />
  //       );
  //     case '2':
  //       return (
  //         // <OtpScreen
  //         // handlePress={()=>navigation.navigate(RoutesConstant.HOME_PAGE)}
  //         // navigation={navigation}
  //         // // load={isLoad}
  //         // // setLoad={setIsLoad}
  //         // // setPlanLoad={setPlanLoad}
  //         // />
  //       );
  //       // case '3':
  //       //   return (
  //       //     <SignUpProfileScreen
  //       //     handlePress={()=>setIndex('4')}
  //       //     // navigation={props.navigation}
  //       //     // load={isLoad}
  //       //     // setLoad={setIsLoad}
  //       //     // setPlanLoad={setPlanLoad}
  //       //     />
  //       //   );
  //         // case '4':
  //         //   return (
  //         //     <SignUpProfileScreen
  //         //     handlePress={()=>setIndex('4')}
  //         //     // navigation={props.navigation}
  //         //     // load={isLoad}
  //         //     // setLoad={setIsLoad}
  //         //     // setPlanLoad={setPlanLoad}
  //         //     />
  //         //   );
  //     default:
  //       return null;
  //   }
  // };
  return (
    <>
      {/* {renderComponent()} */}
    </>
  );
};

export default LoginScreen;
