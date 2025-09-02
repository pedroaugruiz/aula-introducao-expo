import {RFPercentage} from "react-native-responsive-fontsize"
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#07f',
        borderWidth: RFPercentage(0.6),
        width: '90%',
        padding: 8,
        alignItems: 'left',
        borderRadius: 20,
        marginBottom: RFPercentage(1),
        flexDirection: 'row',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: '#121212',
        fontWeight: 'bold',
        borderWidth: 2,
        marginBottom: RFPercentage(1),
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#fafafa',
    },  
    imagem: {
        // height: rfPercentage(10),
        //width: rfPercentage(28),
        width: '20%',
        resizeMode: 'center',
        flexDirection: 'row-reverse',
    },
});

export default styles;