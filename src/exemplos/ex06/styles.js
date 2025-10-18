import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
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
    textAlign: 'center', // Centraliza horizontalmente
    textAlignVertical: 'center',
    borderRadius: 20,
  }, 
  input: {
    height: 80,
    textAlign: 'center',
    fontSize: 50,
    marginTop: 24,
    width: '50%',
    color: 'lightgray',
},
 buttonText: {
    color: '#6DC4A4',
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
  }, 
txtSaida: {
    margin: 6,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
},
txtEntrada: {
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 17,
    borderColor: '#E91E63',
    height: 50,
    color: '#E53935',
    borderRadius: 10,
    marginTop: 30,
},
button: {
    backgroundColor: '#89FFA5',
},
entradaImc: {
  flex: 1,
  flexDirection: 'row',
},
resultados: {
  alignSelf:'center',
  color: 'lightgray',
  fontSize: 65,
  padding: 15,
},
});

export default styles;
