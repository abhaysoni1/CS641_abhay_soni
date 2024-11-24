import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import RefreshControlExample from './components/RefreshControlExample';
import FlatListExample from './components/FlatListExample';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  function longPressButton() {
      setDisplayText('Long Pressed');
  }

  function showHelperText() {
    setDisplayText('Long press for 3 seconds');
  }

  function hideHelperText() {
    setDisplayText('');
  }
  return (
    // <View style={styles.container}>
      // {/* <Text>{displayText}</Text>
      // <Pressable onLongPress={longPressButton} 
      // delayLongPress={3000}
      // onHoverIn={showHelperText} onHoverOut={hideHelperText}>
      //     <Text>Button Text</Text>
      // </Pressable> */}
    // </View>
    <FlatListExample/>
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

export default App;
