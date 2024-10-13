import { TextInput, Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, usePathname } from 'expo-router'

import { icons } from '../constants'

const SearchInput = ({ initialsQuery }) => {
  const pathName = usePathname()
  const [query, setQuery] = useState( initialsQuery || '')
  return (
    <View className="border-2 border-black-200 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary items-center flex flex-row space-x-4 px-4">
        <TextInput
          className="flex-1 text-white mt-0.5 text-base font-pregular"
          value={query}
          placeholder="Search for a video topic"
          placeholderTextColor="#7B7B8B"
          onChangeText={(e) => setQuery(e)}
        />
        <TouchableOpacity
          onPress={() => {
            if (!query) {
              return Alert.alert('Missing query', "Please input something to search results across database ")
            }
            if (pathName.startsWith('/search')) router.setParams({query})
            else router.push(`/search/${query}`)
          }}
        >
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode='contain'
          />
        </TouchableOpacity>
    </View>
  )
}

export default SearchInput