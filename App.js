import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');

  const onChangeText = (text) => {
    console.log(text);
    setLembrete(text);
  };

  const adicionarLembrete = () => {
    console.log('Adicionado');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
          onChangeText={onChangeText}
          //onChange={(e) => onChangeText(e.target.value)}
          value={lembrete}
        />
        <Button title='Adicionar' onPress={adicionarLembrete} />
        <Text>{lembrete}</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  lembreteTextInput: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 12,
  },
});
