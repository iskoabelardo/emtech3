// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Login </Text>
        <View style={styles.inputContainer}>
            <Text style={styles.informationName}> Email </Text>
                <TextInput
                style={styles.input}
                placeholder="Enter your email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
        </View>
      <View style={styles.inputContainer}>
        <Text style={styles.informationName}> Password </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
      </View>
        <View style={styles.login}>
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
    marginVertical: 150,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25
  },
  inputContainer: {
    margin: 4,
    padding: 12
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#9B9897'
  },
  informationName: {
    fontWeight: 'bold',
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
  },
  login: {
  }
});