import {RFPercentage} from "react-native-responsive-fontsize"
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        borderRadius: 20,
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: 'deepskyblue',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    texto: {
        fontSize: RFPercentage(2.2),
    },
    botao: {
        backgroundColor: '#777',
        width: '60%',
        borderRadius: RFPercentage(1),
        padding: RFPercentage(1),
        alignItems: 'center',
    },
    txtbotao: {
        color: '#ff0',
        fontSize: RFPercentage(2),
    },
});

export default styles;