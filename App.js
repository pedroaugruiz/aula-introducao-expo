import { StyleSheet, Text, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex01';

import Exemplo02 from './src/exemplos/ex02';

import Atividade2 from './src/atividades/ex02 copy';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade2 />
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
