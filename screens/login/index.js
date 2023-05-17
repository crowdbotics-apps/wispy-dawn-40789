import { ImageBackground } from "react-native";
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
const deviceWidth = Dimensions.get("window").width;

const LoginScreen = () => {
  const handleSignUp = () => {
    console.log("Sign Up button pressed");
  };

  const handleLogin = () => {
    console.log("Login button pressed");
  };

  return <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.headingTxt}>Sign In</Text>
        <ImageBackground style={styles.logo} source={require("./Brand initial Simple Logo-4.png")} resizeMode="cover" />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomSectionText}>Welcome Back!</Text>
        <Text style={styles.bottomSectionDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  topSection: {
    flex: 1,
    alignItems: "center"
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center"
  },
  bottomSectionText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  bottomSectionDescription: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "400",
    maxWidth: deviceWidth / 1.4,
    textAlign: "center",
    padding: 5,
    marginVertical: 12
  },
  headingTxt: {
    fontWeight: "bold",
    color: "black",
    fontSize: 28
  },
  logo: {
    width: 59,
    height: 0
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "black",
    borderRadius: 6,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: 5,
    width: deviceWidth - 80,
    minHeight: 45,
    marginVertical: 12
  },
  buttonText: {
    color: "white"
  }
});
export default LoginScreen;