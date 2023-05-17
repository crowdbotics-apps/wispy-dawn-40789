import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TruckLocationsScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Truck Locations</Text>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.subtitle}>Employee Name</Text>
      <Text style={styles.location}>Latitude: 37.7749</Text>
      <Text style={styles.location}>Longitude: -122.4194</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  location: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default TruckLocationsScreen;