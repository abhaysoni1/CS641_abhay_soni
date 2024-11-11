import { View, Text ,FlatList, Image} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import { bodyParts } from '../constants'
import { useRouter } from 'expo-router';
//import { LinearGradient } from 'expo-linear-gradient';
export default function BodyParts() {
    const router = useRouter();
  return (
    <View className='mx-4'>
      <Text style={{fontSize : hp(3)}} className="font-semibold text-neutral-700">
        Exercises
      </Text>
      <FlatList 
      data ={bodyParts}
      numColumns={2}
      keyExtractor={items=> items.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50, paddingTop:20}}
      columnWrapperStyle={{
        justifyContent:'space-between'
      }}
      renderItem={({item,index})=> <BodyPartCard router={router} index={index} item={item}/>}
    />
    </View>
  )
}
const BodyPartCard = ({item, router, index})=>{
    return(
        
        <View>
            <TouchableOpacity
            onPress={()=>router.push({pathname: '/exercises', params: item})}
            style={{width:wp(44), height:wp(52)}}
            className="flex justify-end p-4 mb-4">
            <Image 
            source={item.image}
            resizeMethod='cover'
            style ={{width:wp(44), height:wp(52)}}
            className="rounded-[35px] absolute"
            />

        <Text
            style={{fontSize:hp(2,3)}}
            className="text-white font-semibold text-center tracking-wide">
            {item?.name}
        </Text> 
            </TouchableOpacity>
        </View>
    )
}