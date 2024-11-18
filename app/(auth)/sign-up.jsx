import { ScrollView, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

import { KeyboardAvoidingView } from 'react-native'

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  })

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.username)
      setUser(result)
      setIsLoggedIn(true)
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <KeyboardAvoidingView behavior='padding' style="w-full flex justify-center min-h-[77vh] px-4 my-10">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">Sign up to Aora</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
            otherStyles="mt-7"
          />
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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-sm font-psemibold text-secondary underline">Sign in</Link>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp