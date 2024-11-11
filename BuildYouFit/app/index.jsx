import { View, Text ,Image } from 'react-native'
import React from 'react'
import "./global.css"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
export default function index() {
    const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light"/>
      <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')}/>
    
    <LinearGradient
    colors={['transparent', '#18181b']}
    style={{width: wp(100), height:(220)}}
    start={{x:0.5, y:0}}
    end= {{x:0.5,y:0.8}}
    className="flex justify-end pb-12 space-y-8"
    >
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
            <Text className="text-white">
                <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">Best </Text>
                <Text style={{fontSize:hp(5)}} className="text-rose-500 font-bold tracking-wide">Workout</Text>
            </Text>
            <Text style={{fontSize:hp(5)}} className="text-rose-500 font-bold tracking-wide">For You</Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity style={{height: hp(7), width: wp(80)}}
            className= "bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
            onPress= {()=> router.push('home')}
            >
                <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-wideness">
                    Get Started
                </Text>
            </TouchableOpacity>
        </Animated.View>
    </LinearGradient>
    
    </View>
  )
}