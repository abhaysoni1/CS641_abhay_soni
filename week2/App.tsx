import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open upApp.tsx anjanto start working on your app!</Text>
      <StatusBar style="auto" />
      <ActivityIndicator size="large"/>
    </View>
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
