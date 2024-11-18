import { FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { ResizeMode, Video } from "expo-av"

import { icons } from '../constants'

const zoomIn = {
  0: {
    scale: 0.9  
  },
  1: {
    scale: 1
  }
}

const zoomOut = {
  0: {
    scale: 1
  },
  1: {
    scale: 0.9
  }
}

const TrendingItem = ({ activeItem, item }) => {
  const [trendingPlay, setTrendingPlay] = useState(false)

  return (
    <Animatable.View
      className=""
      animation={ activeItem === item.$id ? zoomIn : zoomOut }
      duration={500}
    >
      {trendingPlay ? (
        <Video 
          source={{ uri: item.video }}
          className="w-52 h-80 rounded-[35px] my-6 mx-2 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setTrendingPlay(false)
            }
          }}
        />
      ) : (
        <TouchableOpacity 
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setTrendingPlay(true)}
        >
          <ImageBackground
            source={{uri: item.thumbnail}}
            className="w-52 h-80 rounded-[35px] my-6 mx-2 overflow-hidden shadow-lg shadow-black/40"
            resizeMode='cover'
          />
          
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  )
}

const Trending = ({posts}) => {
  const [activeItem, setActiveItem] = useState(posts[1])
  
  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key)
    }
  }

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item ) => item.$id}
      renderItem={({item}) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentOffset={{x: 135}}
    />
  )
}

export default Trending