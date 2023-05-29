// import {NavigatorParamList} from '@/navigators';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// import React, {FC} from 'react';
// import {Pressable, View, FlatList} from 'react-native';
// import {Card} from 'react-native-paper';
// import {AppText} from '@/components';
// import {translate} from '@/i18n';

// const OnboardScreen: FC<
//   NativeStackScreenProps<NavigatorParamList, 'login'>
// > = ({navigation}) => {
// //   const S = useDashboardScreenStyles();

//   return (
//     <View style={{}}>
//     <AppText.Text>'Helloooo</AppText.Text>
//     </View>
//   );
// };

// export default OnboardScreen;

// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, {useState} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import {AppText} from '@/components/index';
import {Colors} from '@/themes/Variables';
import assets from '@/assets/index';
import {RoutesConstant} from '@/navigators';
// import screenHeight from '../../themes/Layout';

const OnboardScreen = ({navigation, handleCancel}: any) => {
  const [showApp, setShowApp] = useState(false);
  const screenHeight = Dimensions.get('screen').height;

  console.log(screenHeight, 'screenHeight');
  const handleIntroDone = () => {
    navigation.navigate(RoutesConstant.WELCOME, {
      signUpScreen: false,
    });
    setShowApp(true);
    // let newUserData = {seen_walkthrough: true};
    // userInfoUpdate?.mutate(newUserData);
  };
  const handleIntroSkip = () => {
    navigation.navigate(RoutesConstant.WELCOME, {signUpScreen: false});
    setShowApp(false);
    // let newUserData = {seen_walkthrough: true};
    // userInfoUpdate?.mutate(newUserData);
  };
  const RenderItem = ({item}: any) => {
    return (
      <>
        <TouchableOpacity
          style={{alignItems: 'flex-end', padding: 20}}
          onPress={() => handleIntroSkip()}>
          <AppText.Text style={[styles.navigationButtonText]}>
            Skip
          </AppText.Text>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: item?.key == 's3' ? 5 : 0,
            borderColor: item?.key == 's3' ? '#000' : 'fff',
            borderRadius: 18,
            width: item?.key == 's3' ? '80%' : '100%',
            height: item?.key == 's3' ?'50%':'60%',
            justifyContent:'center',
            alignSelf:'center',

          }}>
          <Image
            source={item?.image}
            resizeMode="contain"
            style={[
              styles.introImageStyle,
              {alignSelf: 'center', width:'90%',            height:'100%',            },
            ]}
          />
        </View>
        {/* <Image
          source={item?.image}
          resizeMode="contain"
          style={[styles.introImageStyle,{alignSelf:'center',width:item?.key=='s3'?'80%':'100%',borderWidth:5,borderColor:'#000',borderRadius:18}]}


          /> */}

        {/* <View style={{position: 'absolute',}}> */}
        {/* <Image
          source={assets.whiteBg}
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            bottom: '-5%',
            width:'100%',
            // left: 1,
          }}
          // resizeMethod='stretch'
        /> */}
        {item?.text}
        {/* </View> */}
        {/* <AppText.Text style={{flex:0.1}}>Hwlloooo</AppText.Text> */}
        {/* <View style={{flex:0,height:300,width:'100%',backgroundColor:'white',position:'absolute',bottom:0}}>

</View> */}
      </>
    );
  };

  return (
    <>
      {/* <View style={{flex: 1}}> */}
      {/* <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleIntroSkip()}
          style={{
            // backgroundColor: Colors.primary,
            // alignItems: 'flex-end',
            // padding: 20,
          }}>
          <Cancel height={30} width={30} />
        </TouchableOpacity> */}
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={() => handleIntroDone()}
        // showSkipButton={true}
        onSkip={() => handleIntroSkip()}
        showPrevButton={true}
        // bottomButton
        //   showDoneButton={false}
        // renderNextButton={() => (
        //   <View style={styles.row}>
        //     <AppText.Text style={styles.navigationButtonText}>
        //       NEXT
        //     </AppText.Text>
        //   </View>
        // )}
        renderDoneButton={() => (
          <View style={[styles.row]}>
            <AppText.Text style={styles.navigationButtonText}>
              DONE
            </AppText.Text>
          </View>
        )}
        // renderPrevButton={() => (
        //   <View style={styles.row}>
        //     <MIcon
        //       style={{marginRight: -4}}
        //       size={18}
        //       name="arrow-back-ios"
        //       color={Colors.white}
        //     />
        //     <AppText.Text style={styles.navigationButtonText}>
        //       PREV
        //     </AppText.Text>
        //   </View>
        renderNextButton={() => (
          <View style={styles.row}>
            <AppText.Text style={styles.navigationButtonText}>
              NEXT
            </AppText.Text>
          </View>
        )}
        renderPrevButton={() => (
          <View style={styles.row}>
            <AppText.Text style={styles.navigationButtonText}>
              PREV
            </AppText.Text>
          </View>
        )}
        dotStyle={{
          backgroundColor: Colors.primary,
          height: 12,
          width: 12,
          borderRadius: 6,
          // marginBottom: 20,
        }}
        activeDotStyle={{
          backgroundColor: Colors.primary,
          opacity: 0.2,
          height: 12,
          width: 12,
          borderRadius: 6,
          // marginBottom: 20,
        }}

        //   style={{backgroundColor:}}
        //   indicatorStyle={{}}
        //   indicatorStyle=
      />
      {/* </View> */}
    </>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    // padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    // padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    // height:'60%',
    // flex: 0.85,
    position: 'relative',
    width: '100%',
    // overflow:'hidden'
    // width: 350,
    // height: 200,
  },
  introTextStyle: {
    fontSize: 20,
    // color: 'white',
    textAlign: 'center',
    marginVertical: 3,
    paddingHorizontal: 25,
    // ...fontConfigRoboto?.regular,
    fontWeight: '300',
  },
  introTitleStyle: {
    fontSize: 33,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textTransform: 'uppercase',
  },
  getStarted: {
    // fontWeight: '700',
    color: Colors.primary,
    paddingHorizontal: 40,
    textAlign: 'center',
    // // fontSize: 24,

    fontSize: 30,
    top: 20,
    // // color: 'red',
    // position: 'absolute',
    // bottom: '20%',
    // // marginHorizontal: 20,
    // justifyContent: 'center',
    // bottom:30
    // textAlign: 'center',
    // backgroundColor:'yellow',
    // paddingTop:15,
    // flex:10,
    // justifyContent:'center',
    // position:'relative',
    // bottom:20,
    // zIndex:9999999
    // lineHeight:0
    // ...fontConfigRoboto?.regular,
    // fontSize: 16,
  },
  desc: {
    fontSize: 18,
    color: 'white',
    // ...fontConfigRoboto?.regular,
    fontWeight: '300',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -12,
    // backgroundColor: Colors.primary,
    // width: '30%',
    // paddingVertical: 10,
    // alignSelf: 'center',
  },
  navigationButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '700',
    // top:0,
    // position
  },
});

const slides = [
  {
    // title: "You're All Set!",
    text: (
      <AppText.Title style={styles.getStarted}>
        {`Doctors & experts to\n help your health!`}
      </AppText.Title>
    ),
    // paragraph: (
    //   <AppText.Paragraph style={styles.desc}>
    //     Here are a few tips to help you make the most of your PennyProfit
    //     account.
    //   </AppText.Paragraph>
    // ),

    // <Image  source={assets.introSlider1} />
    // svg: <ImgCircle height={100} width={100} />,
    // backgroundColor: 'red',
    // svg: (
    //   <View style={{flex:1}}>
    //     <Image
    //       source={assets.introSlider1}
    //       style={{

    //         //     height:400,width:300, borderLeftWidth:Dimensions.get('window').width,
    //         // borderBottomWidth: 80,
    //         // borderLeftColor: 'yellow',
    //         // borderBottomColor: 'white',
    //         // width: 300,
    //         // height: 500,
    //         // backgroundColor: 'transparent',
    //         // borderStyle: 'solid',
    //         // borderLeftWidth: 50,
    //         // borderRightWidth: 100,
    //         // borderBottomWidth: 100,
    //         // borderLeftColor: 'transparent',
    //         // borderRightColor: 'transparent',
    //         // borderBottomColor: 'pink',

    //       }}
    //       resizeMode='cover'
    //     />
    //   </View>
    // ),
    image: assets.introSlider1,
  },
  {
    key: 's2',
    // title: 'Monitored Accounts',
    text: (
      <AppText.Title style={styles.getStarted}>
        {'Chatbot consultations \neasily!'}
      </AppText.Title>
    ),
    image: assets.introSlider2,
    // svg: <WalkThroughAccount />,
    // backgroundColor: Colors.primary,
  },
  {
    key: 's3',
    text: (
      <AppText.Title style={[styles.getStarted,{top:'10%'}]}>
        {` Video Stream on \n Each Topic For Help`}
      </AppText.Title>
    ),
    image: assets.introSlider3,
    // svg: <WalkThroughRoundup width={300} />,
    // backgroundColor: Colors.primary,
  },
];
