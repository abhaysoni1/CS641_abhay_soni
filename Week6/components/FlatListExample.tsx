import React from 'react';
import {TextInput} from 'react-native';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description:'1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description:'2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description:'3',
  },
];

type ItemProps = {title: string, description : string};

const Item = (props: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.title}>{props.description}</Text>
  </View>
);

const FlatListExample = () => {
    const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} description={item.description} />}
        keyExtractor={item => item.id}
      />
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    
    height: 40,
    marginTop: 0,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,

  },
  list: {
    flexGrow: 0,

  },
});


export default FlatListExample;