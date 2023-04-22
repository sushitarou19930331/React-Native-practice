import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 5) + 1);
  const [guess, setGuess] = useState('');

  const checkAnswer = () => {
    if (Number(guess) === answer) {
      Alert.alert('Correct！');
    } else {
      Alert.alert('Try again!!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please guess number 1 - 5</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(text) => setGuess(text)}
        value={guess}
      />
      <Button title='Check Answer' onPress={checkAnswer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 20,
    width: 200,
    marginBottom: 20,
  },
});
