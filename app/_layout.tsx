import '../global.css';
import '../config.ts';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { isLoggedIn$ } from '~/store/auth';

const StackLayout = () => {
  useEffect(() => {
    // console.log('object');
  }, [isLoggedIn$]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  const theme = createTheme({
    lightColors: {
      primary: '#8b5cf6',
    },
    darkColors: {
      primary: '#000',
    },
    mode: 'light',
  });

  return (
    <ThemeProvider theme={theme}>
      <StackLayout />
    </ThemeProvider>
  );
}
