import { Text, View, Image } from 'react-native'
import React from 'react'

import { router } from 'expo-router'
import { images } from '../constants'
import CustomButton from './CustomButton'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode='contain'
      />
      <Text className="font-psemibold text-xl text-white">
        {title}
      </Text>
      <Text className="text-sm text-center mt-2 font-pmedium text-gray-100">
          {subtitle}
      </Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  )
}

export default EmptyState
