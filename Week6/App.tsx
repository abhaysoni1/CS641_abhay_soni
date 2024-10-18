import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import RefreshControlExample from './components/RefreshControlExample';
import FlatListExample from './components/FlatListExample';
import ModelExample from './components/ModalExample';
import TextInputExample from './components/TextListExample';
const App=()=> {
  const [displayText, setDisplay] = useState('');
  function longPressButton(){
      setDisplay('Long Press');
  }
  function hoverButton(){
    setDisplay('Hover');
}
  return (
    
    // <View style={styles.container}>
      
    //   <Text>{displayText}</Text>
    //   <Pressable onLongPress={longPressButton} onHoverIn={hoverButton} delayLongPress={1000}>
    //       <Text> Button1 Text</Text>
    //   </Pressable>
    //   <StatusBar style="auto" />
    // </View>
    //<RefreshControlExample/>
    <FlatListExample/>
    //<ModelExample/>
    //<TextInputExample/>
    
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