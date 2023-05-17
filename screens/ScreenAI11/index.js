import { Pressable } from "react-native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ScreenTwo = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.headerText}>Tasks</Text>
        </Pressable>
      </View>
      <View style={styles.taskContainer}>
        <TouchableOpacity style={styles.taskButton}>
          <Pressable>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.taskImage} />
          </Pressable>
          <Text style={styles.taskText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.taskImage} />
          <Text style={styles.taskText}>Fire Fly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.taskImage} />
          <Text style={styles.taskText}>Pallets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.taskImage} />
          <Text style={styles.taskText}>Rolls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.taskImage} />
          <Text style={styles.taskText}>Issues</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.taskImage} />
          <Text style={styles.taskText}>Tracking</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 80,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  taskContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20
  },
  taskButton: {
    width: "40%",
    height: 150,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  taskImage: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  taskText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
export default ScreenTwo;