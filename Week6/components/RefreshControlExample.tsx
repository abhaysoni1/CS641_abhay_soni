import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native';

const RefreshControlExample = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={styles.container}>
        
    
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <Text style={styles.text}>Inside</Text>
        <Text>Pull down to see RefreshControl indicator</Text>
        
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex: 1,
    justifyContent: 'center',
  },
  text:{

  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RefreshControlExample;