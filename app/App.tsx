import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppNavigator} from '@/navigators';
import AppProvider from './Providers';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import useTheme from '@/hooks/useTheme';
import './i18n';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const theme = useTheme();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    // Context is wired into the local state of our main component, so that its values could be propagated throughout the entire application
    <AppProvider>
      <PaperProvider theme={theme.NavigationTheme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </AppProvider>
  );
}
