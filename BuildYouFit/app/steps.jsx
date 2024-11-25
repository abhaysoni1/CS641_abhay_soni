import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Accelerometer } from 'expo-sensors';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

export default function Steps() {
  const [steps, setSteps] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [lastMagnitude, setLastMagnitude] = useState(0);
  const [lastTimeStamp, setLastTimestamp] = useState(0);
  const animationRefRunning = useRef(null);
  const animationRefSitting = useRef(null);
  useEffect(() => {
    let subscription;
    Accelerometer.isAvailableAsync().then((result) => {
      if (result) {
        subscription = Accelerometer.addListener((data) => {
          const { x, y, z } = data;
          const magnitude = Math.sqrt(x * x + y * y + z * z);
          const threshold = 1.2; // Increased threshold for more reliable step detection
          const timestamp = new Date().getTime();
        
          // Step detection logic
          if (
            Math.abs(magnitude - lastMagnitude) > threshold &&
            !isCounting &&
            timestamp - lastTimeStamp > 1200 // Cooldown period increased to 1200ms
          ) {
            setIsCounting(true);
            setLastMagnitude(magnitude);
            setLastTimestamp(timestamp);
            setSteps((prevSteps) => prevSteps + 1);

            setTimeout(() => {
              setIsCounting(false);
            }, 1500); // Prevent consecutive detections
          }
        });
      } else {
        console.log('Accelerometer not available on this device');
      }
    });

    return () => {
      // Cleanup subscription
      if (subscription) subscription.remove();
    };
  }, [isCounting, lastMagnitude, lastTimeStamp]);

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Step Tracker</Text>
        <View style={styles.infoContainer}>
          <View style={styles.stepsContainer}>
            <Text style={styles.stepsText}>{steps}</Text>
            <Text style={styles.stepsLabel}>Steps</Text>
          </View>
          <Text style={styles.resetButton} onPress={resetSteps}>
            Reset Steps
          </Text>
        </View>
        <View style={styles.animationContainer}>
        {isCounting?(
            <LottieView
                autoPlay
                ref={animationRefRunning}
                style={styles.animation}
                source={require('../assets/images/walking.json')}
            />
        ):(
            <LottieView
            autoPlay
                ref={animationRefSitting}
                style={styles.animation}
                source={require('../assets/images/Sitting.json')}
            />
        )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f9fc', // Light and modern background color
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 32,
      marginBottom: 30,
      fontWeight: 'bold',
      color: '#2c3e50', // Darker text for better contrast
      textAlign: 'center',
    },
    infoContainer: {
      alignItems: 'center',
      marginBottom: 30,
      padding: 20,
      backgroundColor: '#ffffff', // Card-like container
      borderRadius: 15,
      elevation: 5, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    stepsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    stepsText: {
      fontSize: 48, // Larger font for better visibility
      fontWeight: 'bold',
      color: '#2980b9', // Attractive blue color
      marginRight: 10,
    },
    stepsLabel: {
      fontSize: 20,
      color: '#7f8c8d', // Subtle gray for labels
    },
    resetButton: {
      marginTop: 15,
      color: '#e74c3c', // Eye-catching red color for the reset button
      fontSize: 18,
      fontWeight: '600',
      textDecorationLine: 'underline',
    },
    animationContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff', // Card-like background
      borderRadius: 15,
      padding: 20,
      marginTop: 30,
      elevation: 5, // Shadow for Android
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    animation: {
      width: 300, // Optimized size for better scaling
      height: 300,
      backgroundColor: 'transparent',
    },
  });