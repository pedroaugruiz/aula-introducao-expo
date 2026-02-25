import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function ListaExemplos() {
    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplos</Text>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBtn}>Exemplo 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBtn}>Exemplo 2</Text>
            </TouchableOpacity>
        </View>

    );
}
