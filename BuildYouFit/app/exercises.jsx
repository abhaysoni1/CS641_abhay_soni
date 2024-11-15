import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { bodyParts } from '../constants';
import { fetchExercisesByBodyParts } from '../api/exerciseDB';

export default function Exercises() {
    const router= useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();
    console.log('got item', item);

    useEffect(()=>{
        if(item) getExercises(item.name);
    },[item]);

    const getExercises = async (bodyParts) =>{
    let data = await fetchExercisesByBodyParts(bodyParts);
    //console.log('got data:', data);
    setExercises(data);
}

  return (
    <View className='mt-20'>
      <Text>Exercise</Text>
      <TouchableOpacity onPress={()=>router.back()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}