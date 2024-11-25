import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

import Anticons from 'react-native-vector-icons/AntDesign'
import { useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Notification() {
    const router = useRouter();
  return (
    <View>
        <TouchableOpacity
        onPress={()=> router.back()}
        className='mx-3 absolute rounded-full mt-1 right-2'
        >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />

        </TouchableOpacity>
      <Text>notification</Text>
    </View>
  )
}