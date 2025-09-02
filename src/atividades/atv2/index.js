import { View, Text, Image } from "react-native";

import styles from "./styles";

import img from '../../../assets/camisa-brasil.png';
import Mensagem from "./mensagem";

function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Mensagem  
            titulo={'Camisa Brasil'}
            imagem = {img} >
            Custa R$ 250,00
            </Mensagem>
            <Mensagem titulo={'SUCESSO'}>Acesso permitido</Mensagem>
            <Mensagem titulo={'AVISO'}>O tempo acabou!</Mensagem>
        </View>
    )
}
export default Atividade2;