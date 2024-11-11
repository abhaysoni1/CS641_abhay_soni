import { View, Text ,Image} from 'react-native'
import React from 'react'
//import Carousel , {ParallaxImage}from 'react-native-snap-carousel'
//import Carousel from 'react-native-reanimated-carousel';
import { SwiperFlatList} from 'react-native-swiper-flatlist';
import { sliderImages } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { ParallaxImage } from 'react-native-snap-carousel';

export default function ImageSlider() {
  return (
    <SwiperFlatList
      data={sliderImages}
      loop
      autoplay
      autoplayDelay={2}
      autoplayInterval={4000}
      renderItem={ItemCard}
      
      paginationStyle={{
        position: 'absolute',
        bottom: 10,
      }}
    />
    
  )
}

const ItemCard = ({ item }) => {
  return (
    <View
      style={{
        width: wp(100),
        height: hp(25),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      }}
    >
      <Image
        source={item}
        style={{
          width: wp(100) - 70,
          height: '100%',
          borderRadius: 30,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};