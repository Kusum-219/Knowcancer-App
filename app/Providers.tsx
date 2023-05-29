import React, { FC } from 'react';

import { focusManager, QueryClient, QueryClientProvider } from 'react-query';
import { AppStateStatus, Platform } from 'react-native';
import { useAppState } from '@/hooks/useAppState';
import { useOnlineManager } from '@/hooks/useOnlineManager';

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children })  => {
  useOnlineManager();
  useAppState(onAppStateChange);
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
