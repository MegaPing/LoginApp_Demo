// This section of code imports a bunch of components from React Native.
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    // Display an alert instead of console.log
    Alert.alert('Login Successful', "You've been logged in", [{ text: 'OK' }]);

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Snipe.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Type in your credentials to log in</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />



      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupLink}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

// Everything below allows you to change the style of the above components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  // This section of code styles the logo!
  logo: {
    width: 350, // Adjust width as needed
    height: 350, // Adjust height as needed
    alignSelf: 'center', // Center the logo
    marginBottom: 20, // Space between the logo and the title
  },
  // This section of code styles the title!
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 5, // Adjust margin for better spacing
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666', // Lighter color for subtitle
    marginBottom: 20, // Spacing below the subtitle
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupLink: {
    marginTop: 15,
    alignItems: 'center',
  },
  signupText: {
    color: '#007bff',
  },
});

export default LoginScreen;