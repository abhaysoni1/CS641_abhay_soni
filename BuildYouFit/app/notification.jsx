import React, { useState, useEffect } from 'react';
import { View, Button, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import Anticons from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WeeklyReminder() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // Request notification permissions
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('You need to grant notification permissions to use this feature.');
      }
    };
    requestPermissions();
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  // Schedule notification for a specific time
  const scheduleNotification = async () => {
    const now = new Date();

    if (date.getTime() <= now.getTime()) {
      alert('Please choose a future time!');
      return;
    }

    const trigger = new Date(date); // Use the selected date and time

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Workout Reminder',
        body: 'It’s time to start your workout!',
        sound: 'default',
      },
      trigger: trigger,
    });

    alert(`Reminder scheduled for ${trigger.toLocaleString()}`);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-3 absolute rounded-full mt-1 right-2"
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>
      <Text style={styles.title}>Set Workout Reminder</Text>

      <Button title="Choose Date & Time" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChange}
        />
      )}

      <Button title="Set Reminder" onPress={scheduleNotification} />

      <Text style={styles.info}>Selected time: {date.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f9fc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  info: {
    marginTop: 20,
    fontSize: 16,
    color: '#34495e',
  },
});