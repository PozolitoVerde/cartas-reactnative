
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.uno}>
        <Text style={styles.texto1}>Contador: 0</Text>
        <Button
          title='Incrementar'
        />
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  uno:{
    flex:1,
    backgroundColor:'#904130',
    padding:20,
    justifyContent:'center',
  },

  texto1:{
    textAlign:'center',
    fontSize:30,
    color:'white',
    fontWeight:'bold'
  }
});
