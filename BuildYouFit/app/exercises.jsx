import { View, Text ,Image, StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { bodyParts, DemoExercises } from '../constants';
import { fetchExercisesByBodyParts } from '../api/exerciseDB';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';
export default function Exercises() {
    const router= useRouter();
    const [exercises, setExercises] = useState(DemoExercises);
    const item = useLocalSearchParams();
    console.log('got item', item);
    
    // useEffect(()=>{
    //     if(item) getExercises(item.name);
    // },[item]);

    const getExercises = async (bodyPart) =>{
      try{
    let data = await fetchExercisesByBodyParts(bodyPart);
    console.log('got data:', data);
    setExercises(data);
      }catch(error){
        console.error('Error fetching exerecise', error);
      }
}

  return (
    <ScrollView>
      <StatusBar style="light"/>
      <Image
      source={item.image}
      style={{width: wp(100), height: hp(45)}}
      className="rounded-b-[40px]"
      />
      

    <View className="mx-4 space-y-3 mt-4">
      <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">
        {item.name} exercises
      </Text>
      <View className="mb-10">
        <ExerciseList data={exercises}/>
      </View>
    </View>

    </ScrollView>
   
  )
}