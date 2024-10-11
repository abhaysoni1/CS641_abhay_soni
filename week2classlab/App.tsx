import { StatusBar } from 'expo-status-bar';
import { Image,ActivityIndicator, ScrollView,StyleSheet, Text, View } from 'react-native';
import react,{useState} from "react";
import FunctionalComponent from './components/FunctionalComponent';

export default function App() {
 
  return (
    <ScrollView>
      <Text>Text1</Text>
      <Text>Text2</Text>
      <ActivityIndicator></ActivityIndicator>
      <FunctionalComponent title={"Increase"} showButton={true} showButton2={false}/>
      <FunctionalComponent title={"Decrease"} showButton={false} showButton2={true}/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    width:500,
    height:500,
  }
});
