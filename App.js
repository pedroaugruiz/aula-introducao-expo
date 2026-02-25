import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import StackExemplos from './src/navegacao/stackExemplos';

import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02'; 
import Exemplo03 from './src/exemplos/ex03'; 
import Exemplo04 from './src/exemplos/ex04'; 
import Exemplo05 from './src/exemplos/ex05'; 
import Exemplo06 from './src/exemplos/ex06';
import Exemplo07 from './src/exemplos/ex07';
import Exemplo08 from './src/exemplos/ex08';
import Exemplo09 from './src/exemplos/ex09';
import ListaExemplos from './src/exemplos/listaExemplos';

import Atividade01 from './src/atividades/atv01';
import Atividade2 from './src/atividades/atv2'; 
import Atividade3 from './src/atividades/atv3';
import Atividade4 from './src/atividades/atv4'; 
import Atividade5 from './src/atividades/atv5'; 
import Atividade6 from './src/atividades/atv6';
import Atividade7 from './src/atividades/atv7';

// import Revisao01 from './src/revisao/rev01';

import Revisao02 from './src/revisao/rev02';
import Revisao03 from './src/revisao/rev03';
import Revisao09 from './src/revisao/rev09';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackExemplos />
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    padding: RFPercentage(1.2), 
    paddingTop: Constants.statusBarHeight, 
  },
});

