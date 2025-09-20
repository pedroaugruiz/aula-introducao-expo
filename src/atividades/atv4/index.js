import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import { useState } from "react";

function Atividade4 () {

    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('');
    const [mensagem, setMensagem] = useState('');

    function handleExibeMensagem(){
        setMensagem(txt2);
        setTxt2('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txt}>{mensagem}</Text>
            
            <TextInput
                placeholder='Nome'
                keyboardType='ascii-capable'
                onChangeText={setTexto}
                style={styles.input}
            />

            <Text style={styles.txt}>{texto}</Text>
            
            <TextInput
                value={txt2}
                onChangeText={setTxt2}
                placeholder='Sobrenome'
                keyboardType='ascii-capable'
                style={styles.input}
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Atividade4;