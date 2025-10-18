import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useState } from 'react';

import styles from './styles';

export default function Exemplo06() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);
    }

        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 6</Text>
            <View style={styles.entradaImc}>
                <TextInput 
                placeholder='Massa' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setMassa(entrada)}
                />
                <TextInput 
                placeholder='Altura' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setAltura(entrada)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
                <Text style={styles.buttonText}> Calcular </Text>
            </TouchableOpacity>
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
        </View>
}

