import { Text, View,StyleSheet,Image,TextInput} from "react-native";
import { Cadastro, Login } from "../../componetes/Button";


export default function Perfil() {
  return (
    <View style={[estilo.container]}>
   
    </View>

  );
}





const estilo = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'#212529',
    },
    image:{
      flex:0, position:"absolute", top: 100
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:268,
      backgroundColor:"#ffffff",
      borderRadius:12,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap:50,
      transform: [{translateY:100}]
    },
    senha:{
      color:"#8B8B8B",
      borderBottomWidth:1,
      borderBottomColor:"#8B8B8B",
      transform: [{translateY:150}]
    },
    containerInput:{
        transform: [{translateY:50}]
    }
})
