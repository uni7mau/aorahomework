import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router' 
import { useFonts } from 'expo-font'
import GlobalProvider from '../context/GlobalProvider'

import "react-native-url-polyfill/auto" //SDK appwrite

import poppinBlack from '../assets/fonts/Poppins-Black.ttf'
import poppinBold from '../assets/fonts/Poppins-Bold.ttf'
import poppinExtraBold from '../assets/fonts/Poppins-ExtraBold.ttf'
import poppinExtraLight from '../assets/fonts/Poppins-ExtraLight.ttf'
import poppinLight from '../assets/fonts/Poppins-Light.ttf'
import poppinMedium from '../assets/fonts/Poppins-Medium.ttf'
import poppinRegular from '../assets/fonts/Poppins-Regular.ttf'
import poppinSemiBold from '../assets/fonts/Poppins-SemiBold.ttf'
import poppinThin from '../assets/fonts/Poppins-Thin.ttf'

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts ({
    "Poppins-Black": poppinBlack,
    "Poppins-Bold": poppinBold,
    "Poppins-ExtraBold": poppinExtraBold,
    "Poppins-ExtraLight": poppinExtraLight,
    "Poppins-Light": poppinLight,
    "Poppins-Medium": poppinMedium,
    "Poppins-Regular": poppinRegular,
    "Poppins-SemiBold": poppinSemiBold,
    "Poppins-Thin": poppinThin
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="search/[query]" options={{ headerShown: false }}/>
      </Stack>
    </GlobalProvider>
  )
}

export default RootLayout