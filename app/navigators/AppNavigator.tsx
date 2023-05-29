/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from 'react';
import {Image, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  ForgotPasswordScreen,
  OnboardScreen,
  HomeScreen,
} from '../screens';
import {navigationRef, useBackButtonHandler} from './NavigationUtils';
import useTheme from '@/hooks/useTheme';
import {RoutesConstant} from '@/navigators/index';
import {ThemeNavigationTheme} from '@/themes/theme.type';
import SignupScreen from '@/screens/auth/SignUp/SignUpScreen';
import WelcomeScreen from '@/screens/auth/login/components/welcome';
import SignInScreen from '@/screens/auth/login/components/sign';
import OtpScreen from '@/screens/auth/login/components/otp';
import SignUpProfileScreen from '@/screens/auth/SignUp/component/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '@/screens/chatScreen/chatScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import assets from '@/assets';
import { Colors } from '@/themes/Variables';
import SettingScreen from '@/screens/setting/settingPage';
import ProfileDescription from '@/screens/setting/component/ProfileDescriptionScreens';
import ViewDoctor from '@/screens/chatScreen/component/viewDoctor';
import EnterCode from '@/screens/chatScreen/component/enterCode';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  login: undefined;
  forgotPassword: undefined;
  dashboard: undefined;
  signUp: undefined;
  homePage: undefined;
  welcome: undefined;
  otp: undefined;
  chatPage: undefined;
  settingPage: undefined;
  profileDescription:undefined;
  viewDoctor:undefined;
  enterCode:undefined;
  profile:undefined;
  // 🔥 Your screens go here
};

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

interface AppStackProps {
  theme: ThemeNavigationTheme;
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={RoutesConstant.HOME_PAGE} component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size,focused }) => (
<Image source={assets.homeTab} style={{height:25,width:25,tintColor:focused?Colors.primary:'black'}} />
            // <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
         name={RoutesConstant.CHAT_PAGE} component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons name="message1" color={focused?Colors.primary:'black'} size={size} />
            ),
        }}
      />
      <Tab.Screen
         name={RoutesConstant.SETTING_PAGE} component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size,focused }) => (
            <OcticonsIcons name="three-bars" color={focused?Colors.primary:'black'} size={size} />

          ),
        }}
      />
    </Tab.Navigator>
  );
}
const AppStack = ({theme}: AppStackProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.background,
        headerShown: false,
      }}
      initialRouteName={RoutesConstant.DASHBOARD}>
      <Stack.Screen name={RoutesConstant.LOGIN} component={SignInScreen} />
      <Stack.Screen name={RoutesConstant.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={RoutesConstant.OTP} component={OtpScreen} />

      <Stack.Screen
        name={RoutesConstant.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={RoutesConstant.DASHBOARD}
        component={OnboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesConstant.SIGN_UP}
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesConstant.PROFILE}
        component={SignUpProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesConstant.HOME_PAGE}
        component={MyTabs}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={RoutesConstant.PROFILE_DESCRIPTION}
        component={ProfileDescription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesConstant.VIEW_DOCTOR}
        component={ViewDoctor}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={RoutesConstant.ENTERCODE}
        component={EnterCode}
      />
      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const {Layout, darkMode, NavigationTheme} = useTheme();

  useBackButtonHandler(canExit);
  return (
    <>
      <SafeAreaView
        style={[
          Layout.fill,
          {backgroundColor: NavigationTheme.colors.primary},
        ]}>
        <NavigationContainer
          ref={navigationRef}
          theme={NavigationTheme}
          {...props}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <AppStack theme={NavigationTheme} />
        </NavigationContainer>
      </SafeAreaView>
      <SafeAreaView />
    </>
  );
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['login'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
