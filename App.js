import { StyleSheet, Text, View, Image } from 'react-native';

// Exemplos

import Exemplo01 from './src/exemplos/ex01';

import Exemplo02 from './src/exemplos/ex02';

import Exemplo03 from './src/exemplos/ex03';

import Exemplo04 from './src/exemplos/ex04';

// Atividades

import Atividade2 from './src/atividades/atv2';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
});
