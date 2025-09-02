import { View, Text, Image } from "react-native";

import styles from "./styles";

function Mensagem ({titulo, children, imagem}) {
    return(
        <View style={styles.container}>
            {imagem && <Image source={imagem} style={styles.imagem} />}
            <View style={styles.container2}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.texto}>{children}</Text>
            </View>
        </View>
    )
}

export default Mensagem;