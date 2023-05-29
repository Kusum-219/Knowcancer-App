import {NavigatorParamList} from '@/navigators/AppNavigator';

const RoutesConstant: {[key: string]: keyof NavigatorParamList} = {
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgotPassword',
  DASHBOARD: 'dashboard',
  SIGN_UP: 'signUp',
  HOME_PAGE: 'homePage',
  WELCOME: 'welcome',
  OTP: 'otp',
  PROFILE: 'profile',
  CHAT_PAGE:'chatPage',
  SETTING_PAGE:'settingPage',
  PROFILE_DESCRIPTION:'profileDescription',
  VIEW_DOCTOR:'viewDoctor',
  ENTERCODE:'enterCode',
  // START_RESCUE: 'startRescue',
  // REPORT_REVERSAL: 'reportReversal',
  // FIND_TREATMENT: 'findTreatment',
  // FIND_NALOXONE: 'findNaloxone',
  // RESOURCES: 'resources',
  // INVITE_OTHERS: 'inviteOthers',
};

export default RoutesConstant;
