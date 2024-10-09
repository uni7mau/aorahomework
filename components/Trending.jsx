import { FlatList, Text, View } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">
          {item.id}
        </Text>
      )}
      
    
    />
  )
}

export default Trending