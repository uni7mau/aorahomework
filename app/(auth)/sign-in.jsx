import { Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FormField from '../../components/FormField'
import { useState } from 'react'

import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'


const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password: ''
  })

  const submit = () => {

  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center min-h-[77vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">Log in to Aora</Text>
        
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className="text-sm font-psemibold text-secondary underline">Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
