import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
export default function _layout() {
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    >

    <Stack.Screen name='exercises' options={{
        presentation:'modal' 
    }}/>
    <Stack.Screen name='exercisesDetails' options={{
        presentation:'modal' 
    }}/>
    <Stack.Screen name='steps' options={{
        presentation:'fullScreenModal' 
    }}/>
    <Stack.Screen name='notification' options={{
        presentation:'fullScreenModal' 
    }}/>
    </Stack>
    
)
}
