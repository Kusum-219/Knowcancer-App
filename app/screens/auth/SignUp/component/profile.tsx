import React, {FC, useState} from 'react';
import {View, Alert} from 'react-native';
import useSignUpScreenStyles from '../SignUp.styles';
import {Button, TextInput, AppText, FormInput} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList, RoutesConstant} from '@/navigators';
import {Divider} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '@/themes/Variables';
import StepOne from './profileSteps/stepOne';
import StepTwo from './profileSteps/stepTwo';
import StepThree from './profileSteps/stepThree';
import AddPhotoScreen from './profileSteps/addPhoto';

const SignUpProfileScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'forgotPassword'>
> = ({navigation}) => {
  const S = useSignUpScreenStyles();
  const [index, setIndex] = useState(0);

  const renderComponent = () => {
    console.log(index, '19 linne');
    switch (index) {
      case 0:
        return (
          <StepOne
            handlePress={() => setIndex(1)}
            // signUpScreen={signUp}
            navigation={navigation}
            // handleGooglesignUp={handleGoogleSignIn}
            // isShowLoader={isShowLoader}
            // setIsShowLoader={setIsShowLoader}
          />
        );
      case 1:
        return <StepTwo handlePress={() => setIndex(2)} />;
      case 2:
        return (
          <StepThree
            handlePress={() => setIndex(3)}
            navigation={navigation}
            handleAddNew={() => setIndex(4)}
            // load={isLoad}
            // setLoad={setIsLoad}
            // setPlanLoad={setPlanLoad}
          />
        );
      case 3:
        return navigation.navigate(RoutesConstant.HOME_PAGE);
      case 4:
        return <AddPhotoScreen handlePress={() => setIndex(2)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <View style={S.progressView}>
        <MIcon
          // style={{marginLeft: 10,color:'red'}}
          size={18}
          name="arrow-back-ios"
          color={Colors.black}
          
        />
        <View style={S.progressBarView}>
          <View
            style={[
              S.circle,
              {
                borderColor: Colors.primary,
                // backgroundColor: index == 1 ? Colors.primary : Colors.white,
                //   index === '0' ||
                //   index === 'verify' ||
                //   index === 'googleSignin'
                //     ? Colors.green
                //     : Colors.gray,
              },
            ]}>
              { index==0 || index ==1?<MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={18}
                name="check"
                color={Colors.primary}
                style={{alignSelf:'center'}}
              />:<AppText.Title style={[S.circleText]}>1</AppText.Title>}
            {/* {index == 0 ? (
              <MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={18}
                name="arrow-back-ios"
                color={Colors.primary}
              />
            ) : (
              <AppText.Title style={[S.circleText]}>1</AppText.Title>
            )} */}
          </View>
          <Divider style={[S.divider]} />
          <View
            style={[
              S.circle,
              {
                borderColor: Colors.primary,
                backgroundColor: index == 0 ? Colors.primary : Colors.white,
              },
            ]}>
            <AppText.Title
              style={[
                S.circleText,
                {color: index == 0 ? Colors.white : Colors.primary},
              ]}>
              2
            </AppText.Title>
          </View>
          <Divider style={[S.divider]} />
          <View
            style={[
              S.circle,
              {
                borderColor: Colors.primary,
                backgroundColor: index == 1 ? Colors.primary : Colors.white,

              },
            ]}>
            <AppText.Title style={[S.circleText,                {color: index == 1 ? Colors.white : Colors.primary},
]}>3</AppText.Title>
          </View>
        </View>
      </View>
      {renderComponent()}
    </>
  );
};

export default SignUpProfileScreen;
