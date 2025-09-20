import {RFPercentage} from "react-native-responsive-fontsize"
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        flex: 1,
        alignItems: 'center',
    },
    nome: {
        
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: 'deepskyblue',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    txt: {
        fontSize: RFPercentage(2.5),
    },
    input: {
        borderWidth: RFPercentage(0.5),
        borderColor: 'darkslategrey',
        width: '80%',
        borderRadius: RFPercentage(1.5),
        padding: RFPercentage(1.5),
        fontSize: RFPercentage(2),
        textAlign: 'center',
        marginTop: 40,
    },
    botao: {
        backgroundColor: 'darkslategrey',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(2),
    },
    txtbotao:{
        fontSize: RFPercentage(2),
        color: '#fafafa',
    },
});

export default styles;