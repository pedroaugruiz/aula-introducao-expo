import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import { useState } from "react";

function Exemplo4 () {

    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('Valor Inicial');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{texto}</Text>
            
            <TextInput
                onChangeText={setTexto}
                placeholder='texto de fundo'
                keyboardType='ascii-capable'
                // editable={false}
                // multiline
                // numberOfLines={4}
                maxLength={7}
                // secureTextEntry
                style={styles.input}
            />

            <Text style={styles.txt}>{txt2}</Text>
            
            <TextInput
                // onChangeText={setTexto}
                placeholder='digite sua mensagem'
                keyboardType='ascii-capable'
                style={styles.input}
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={() => {}}
            >
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Exemplo4;