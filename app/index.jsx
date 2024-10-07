import React from 'react'
import { Image, Text, View, ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import * as Updates from 'expo-updates'
import { useEffect } from 'react'
import useGlobalContext from '../context/GlobalProvider'

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href='/home'/>;
  // async function onFetchUpdateAsync() {
  //   try {
  //     const update = await Updates.checkForUpdateAsync();
  //     if (update.isAvailable) {
  //       await Updates.fetchUpdateAsync();
  //       await Updates.reloadAsync();
  //     }
  //   } 
  //   catch (error) {
  //     alert(`Error fetching latest Expo updates: ${error}`);
  //   }
  // }

  // useEffect(() => {
  //   onFetchUpdateAsync()
  // }, [])

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* <Loader isLoading={loading}/> */}
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full min-h-[85vh] justify-center items-center px-4">
          <Image
             source={images.logo}
             className="w-[130px] h-[84px]"
             resizeMode='contain'
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with{' '}<Text className="text-secondary-200">Aora</Text></Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar
        backgroundColor='#161622'
        style={'light'}
      />
    </SafeAreaView>
  )
}

// contentContainerStyle={{ height: '100%' }}

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-3xl font-black">Aora!</Text>
//       <StatusBar style="auto"/>
//       <Link href="/home" style={{ color: 'cyan'}}>Go to Home</Link>
//     </View>
//   )
// }

// rnfes: react native funtional expert component with styles
// jsx - javascript xml:JSX is a preprocessor step that adds XML syntax to JavaScript,  
// you can definitely use React without JSX but JSX makes React a lot more elegant

// Set-ExecutionPolicy RemoteSigned
// Set-ExecutionPolicy Restricted
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser - X
// eas update:configure