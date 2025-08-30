import { StyleSheet, Text, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01 />
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
