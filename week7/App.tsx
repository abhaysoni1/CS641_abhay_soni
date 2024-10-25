import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Home({navigation}) {
  return (
      <View style={styles.container}>
        <Text>This is home screen</Text>
          <Button title={"Settings"} onPress={() => navigation.navigate('Settings')}/>
          <Button title={"Hello"} onPress={() => navigation.navigate('Hello')}/>
      </View>
  );
}

function Settings({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is settings screen</Text>
            <Button title={"Settings Again"} onPress={() => navigation.popTo('Settings')}/>
        </View>
    );
}

function Hello({navigation}) {
  return (
      <View style={styles.container}>
          <Text>This is Hello screen</Text>
          <Button title={"Hello"} onPress={() => navigation.navigate('Hello')}/>
      </View>
  );
}
export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Hello" component={Hello}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});