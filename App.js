import { StyleSheet, Text, View, Image } from 'react-native';

// Exemplos

import Exemplo01 from './src/exemplos/ex01';

import Exemplo02 from './src/exemplos/ex02';

import Exemplo03 from './src/exemplos/ex03';

import Exemplo04 from './src/exemplos/ex04';

import Exemplo05 from './src/exemplos/ex05';

import Exemplo06 from './src/exemplos/ex06';

import Exemplo08 from './src/exemplos/ex08';

// Atividades

import Atividade2 from './src/atividades/atv2';

import Atividade3 from './src/atividades/atv3';

import Atividade4 from './src/atividades/atv4';

import Atividade5 from './src/atividades/atv5';

import Atividade6 from './src/atividades/atv6';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo08 />
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
