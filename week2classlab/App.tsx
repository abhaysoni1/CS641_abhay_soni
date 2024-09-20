import { StatusBar } from 'expo-status-bar';
import { Image,ActivityIndicator, ScrollView,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Text1</Text>
      <Text>Text2</Text>
      <ActivityIndicator></ActivityIndicator>
      <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',}} style={styles.tinyLogo} ></Image>
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
