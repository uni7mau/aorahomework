import { Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ 
        title, 
        value, 
        placeholder, 
        handleChangeText, 
        otherStyles, 
        ...props 
    }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
            <View className="border-2 border-black-200 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary items-center flex flex-row">
                <TextInput
                    className="flex-1 text-white px-4 font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image 
                            source={!showPassword ? icons.eye : icons.eyeHide} 
                            className="w-6 h-6 mr-4"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField