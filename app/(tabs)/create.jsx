import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'


const Create = () => {
  return (
    <SafeAreaView className="bg-primary ">
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className="w-full h-full items-center justify-center">
        <Text className="text-gray-100 text-3xl">
          Hello world!
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})