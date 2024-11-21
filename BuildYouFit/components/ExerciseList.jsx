import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { usePathname, useRouter } from 'expo-router';
import {Image} from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ExerciseList({data}) {
    const router = useRouter();
    console.log(data);
  return (
    <View >
      <FlatList 
      data ={data}
      numColumns={2}
      keyExtractor={items=> items.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:60, paddingTop:20}}
      columnWrapperStyle={{
        justifyContent:'space-between'
      }}
      renderItem={({item,index})=> <ExerciseCard router={router} index={index} item={item}/>}
    />
    
    </View>
    
  )
}
const ExerciseCard =({item,router,index}) =>{
    return(
        <View>
            <TouchableOpacity onPress={()=> router.push({pathname:'/exerciseDetails', params: item})} className="flex py-3 space-y-2">
                <View className ="bg-neutral-200" style={{width:wp(44),height:wp(52),borderRadius: 25, overflow: 'hidden'}}>
                    <Image
                    source={{uri: item.gifUrl}}
                    contentFit='cover'
                    style={{width:wp(44),height:wp(52),borderRadius: 25, overflow: 'hidden'}}
                    
                    />
                </View>
                
                <Text style={{fontSize: hp(1.7)}}
                className='text-neutral-700 font-semibold ml-1 tracking-wide'>
                    {
                        item?.name?.length>20? item.name.slice(0,20)+'...' : item.name
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}