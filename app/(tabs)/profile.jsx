import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

import { icons } from '../../constants'

import EmptyState from '../../components/EmptyState'
import VideoCard from '../../components/VideoCard'
import InforBox from '../../components/InforBox'

import { getUserPosts, signOut } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id))

  const logout = async () => {
    await signOut()

    setUser(null)
    setIsLoggedIn(false)

    router.replace("/sign-in")
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => ( 
          <VideoCard video={item}/>
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-end items-center mt-6 mb-2 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={ logout }
            >
              <Image 
                source={icons.logout}
                resizeMode='contain'
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode='cover'
              />
            </View>

            <InforBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <View className="mt-5 flex-row">
              <InforBox
                title={posts.length || 0}
                subTitle="Posts"
                containerStyles="mr-10"
                titleStyle="text-xl"
              />
              <InforBox
                title="1.2k"
                subTitle="Followers"
                titleStyle="text-xl"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={()=> (
          <EmptyState
            title="No video"
            subtitle="You have no video created yet"
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Profile
