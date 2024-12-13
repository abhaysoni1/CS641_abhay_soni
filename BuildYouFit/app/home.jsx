import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider.Jsx';
import BodyParts from '../components/BodyParts';
import { usePathname, useRouter } from 'expo-router';
export default function Home() {
    const router = useRouter();
  return (
    <SafeAreaView className= "flex-1 bg-white flex space-y-5" edges={['top']} >
    <StatusBar style="dark"/>
    <View>
        <ImageSlider/>
    </View>
    <View className="flex-row justify-between items-center mx-5" style={{marginBottom: wp(2)}}>
        <View className="space-y-2">
        <Text
            style= {{fontSize: hp(4.5)}}
            className="font-bold tracking-wider text-rose-700"
        >
            Geared Up
        </Text>
        <Text
            style= {{fontSize: hp(4.5)}}
            className="font-bold tracking-wider text-rose-700"
        >
            For Fitness
        </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
            {/* <Image source ={require('../assets/images/avatar.png')}
            style={{height :hp(6),width:hp(6)}}
            className='rounded-full'/> */}
            
            <View className='flex-row' >
            <TouchableOpacity onPress={()=> router.push({pathname:'/steps'})} >
            <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{height :hp(5.5),width:hp(5.5),marginRight:hp(2)}}>
            <Ionicons name="footsteps" size={hp(3)} color="#900" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> router.push({pathname:'/notification'})} >
            <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{height :hp(5.5),width:hp(5.5)}}>
            <Ionicons name="notifications" size={hp(3)} color="#900" />
            </View>
            </TouchableOpacity>
            </View>
        </View>
    </View>

    
    <View className="flex-1">
        <BodyParts/>
    </View>
</SafeAreaView>
  )
}