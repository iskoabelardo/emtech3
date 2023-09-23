// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile_number, setMobile] = useState(''); 
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your Account</Text>
      <View style={styles.inputContainer}>

        <Text> Name: </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
          value={name}/>

        <Text> Email: </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          value={email}/>

        <Text> Mobile Number: </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          onChangeText={(text) => setMobile(text)}
          value={mobile_number}
          secureTextEntry/>

        <Text> Password: </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry/>

        <Text> Confirm Password: </Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry/>
      </View>
        <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                <View style={styles.loginButton}>
                    <Text style={styles.buttonText}> Login </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#9B9897'
  },
  loginButton: {
    backgroundColor: '#78D6C6',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 25,
    width: "85%"
  }
});