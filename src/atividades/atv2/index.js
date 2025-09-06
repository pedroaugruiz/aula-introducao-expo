import { View, Text, Image } from "react-native";

import styles from "./styles";

import img1 from '../../../assets/camisa-brasil-removebg-preview.png';
import img2 from '../../../assets/camisa-brasil2-removebg-preview.png';
import img3 from '../../../assets/image-removebg-preview.png';
import img4 from '../../../assets/moletom-brasa.png';
import Mensagem from "./mensagem";

function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Mensagem  
            titulo={'Camisa Brasil'}
            imagem = {img1} >
            Custa R$ 250,00
            </Mensagem>
            <Mensagem titulo={'Camisa Brasil Azul'}
            imagem={img2}
            >Custa R$ 250,00</Mensagem>
            <Mensagem titulo={'Camisa Brasil 2002'}
            imagem={img3}
            >Custa R$ 300,00</Mensagem>
            <Mensagem titulo={'Moletom Brasil Preto'}
            imagem={img4}
            >Custa R$ 350,00</Mensagem>
        </View>
    )
}
export default Atividade2;