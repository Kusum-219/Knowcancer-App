import React, {FC, useState} from 'react';
import {
  View,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {Button, TextInput, AppText} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@/navigators';
import useChatScreenStyles from '../ChatScreen.styles';
import assets from '@/assets';
import {Colors} from '@/themes/Variables';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Chat = ({navigation}) => {
  const S = useChatScreenStyles();
  const [isSpeak, setIsSpeak] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);
  return (
    <>
      <View style={S.topView}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={assets.arrow} />

        </TouchableOpacity>
        <AppText.Text style={S.textStyle}>Chat</AppText.Text>
      </View>
      {!isSpeak ? (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            {/* <View style={S.topView}>
              <Image source={assets.arrowBack} />
              <AppText.Text style={S.textStyle}>Chat</AppText.Text>
            </View> */}
            {/* <View> */}
            <AppText.Title style={S.title}>Dr.Shetty</AppText.Title>
            <AppText.Text style={S.titleStyle}>
              Welcome to k<AppText.Text style={{color:Colors.secondary}}>NO</AppText.Text>wcancer.in
            </AppText.Text>
            {/* </View> */}
          </View>
          {/* <ImageBackground  source={assets.reactangleChat} style={{width:'100%',paddingVertical:24,height:500,}}   resizeMode="stretch">
          </ImageBackground> */}

          <View
            style={{
              height: 400,
              width: '95%',
              borderColor: '#E6132',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              shadowColor: Colors.primary,
              elevation: 4,
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <AppText.Title style={{padding: 22}}>
              How can I help you today?
            </AppText.Title>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.primary,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '88%',
                alignSelf: 'center',
                marginBottom: 15,
                padding: 10,
                alignItems: 'center',
              }}
              onPress={() => setIsSpeak(true)}>
              <AppText.Text style={{color: Colors.white}}>
                Ask me anything
              </AppText.Text>
              <Image source={assets.voiceImg} />
            </TouchableOpacity>
          </View>
        </View>
      ) : isQuestion ? (
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <KeyboardAwareScrollView>
            <View style={{marginHorizontal: 15}}>
              <AppText.Title style={{}}>
                How can I help you today?
              </AppText.Title>
              <AppText.Text style={S.questionText}>
                Are you there?{' '}
              </AppText.Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-start',
                }}>
                <Button
                  title="Yes"
                  buttonStyle={[S.buttonStyle, {marginRight: 20}]}
                  labelStyle={S.labelStyle}
                />
                <Button
                  title="No"
                  buttonStyle={S.buttonStyle}
                  labelStyle={S.labelStyle}
                />
              </View>
              <Button
                title="Yes"
                buttonStyle={[
                  S.buttonStyle,
                  {
                    alignSelf: 'flex-end',
                    backgroundColor: Colors.primary,
                    marginTop: 25,
                  },
                ]}
                labelStyle={[S.labelStyle, {color: Colors.white}]}
              />
              <AppText.Text style={S.questionText}>
                What are you looking for?{' '}
              </AppText.Text>
              <AppText.Text style={{textAlign: 'right', color: Colors.black}}>
                Some info.about cancer
              </AppText.Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                }}>
                <Button
                  title="Video"
                  buttonStyle={[S.buttonStyle, {marginRight: 20}]}
                  labelStyle={S.labelStyle}
                />
                <Button
                  title="Text"
                  buttonStyle={S.buttonStyle}
                  labelStyle={S.labelStyle}
                />
              </View>
              <Button
                title="Video"
                buttonStyle={[
                  S.buttonStyle,
                  {
                    alignSelf: 'flex-end',
                    backgroundColor: Colors.primary,
                    marginTop: 25,
                  },
                ]}
                labelStyle={[S.labelStyle, {color: Colors.white}]}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  Linking.openURL('vnd.youtube://user');
                }}
                style={{marginTop: 25}}>
                <Image
                  source={assets.videoCover}
                  // resizeMode='cover'
                  // style={S.footerImage}
                />
                {/* <View style={{backgroundColor:Colors.gray,height:75,width:75,borderRadius:38,position:'absolute',alignSelf:'center',bottom:'25%',alignContent:'center',alignItems:'center',justifyContent:'center'}}>
<Image
      source={assets.youtubeArrow}
      // resizeMode='cover'
      // style={S.footerImage}
    />
</View> */}
                {/* <ImageBackground  source={assets.cardBg} style={{width:'100%',paddingVertical:24,height:200,}}   resizeMode="stretch">
          </ImageBackground> */}
                <ImageBackground
                  source={assets.youtubeEllipse}
                  style={{
                    height: 80,
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    alignSelf: 'center',
                    top: '30%',
                  }}>
                  <Image
                    source={assets.youtubeArrow}
                    // resizeMode='cover'
                    style={{marginLeft: 10}}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '88%',
              alignSelf: 'center',
              marginBottom: 15,
              padding: 10,
              alignItems: 'center',
            }}>
            <AppText.Text style={{color: Colors.white}}>
              Ask me anything
            </AppText.Text>
            <Image source={assets.voiceImg} />
          </TouchableOpacity>

          {/* <TouchableOpacity>
              <AppText.T
            </TouchableOpacity> */}
        </View>
      ) : (
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          {/* <View style={S.topView}>
            <Image source={assets.arrowBack} />
            <AppText.Text style={S.textStyle}>Chat</AppText.Text>
          </View> */}
          <View
            style={{
              height: 400,
              width: '95%',
              borderColor: '#E6132',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              shadowColor: Colors.primary,
              elevation: 4,
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
              flex: 0.9,
            }}>
            <AppText.Title style={{padding: 22}}>
              How can I help you today?
            </AppText.Title>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                marginBottom: 25,
              }}>
              <AppText.Text
                style={{color: Colors.black, fontSize: 16, marginBottom: 20}}>
                You can speak Now. I am listening !
              </AppText.Text>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: Colors.primary,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setIsQuestion(true)}>
                <Image source={assets.voiceImg} />
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={{backgroundColor:Colors.primary,flexDirection:'row',justifyContent:'space-between',width:'88%',alignSelf:'center',marginBottom:15,padding:10,alignItems:'center'}}>
        <AppText.Text style={{color:Colors.white}}>Ask me anything</AppText.Text>
        <Image source={assets.voiceImg}/>
      </TouchableOpacity> */}
          </View>
        </View>
      )}
    </>
  );
};

export default Chat;
