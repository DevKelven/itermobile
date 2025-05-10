import { Text, View,StyleSheet,Image,TextInput} from "react-native";
import { Cadastro, Login } from "../componetes/Button";


export default function cadastro() {
  return (
    <View style={[estilo.container]}>
      <View style={[estilo.image]}>
        <Image
          style={{width:264, height:111}}
          source={require('../../assets/images/LOGO.png')}
        />


        <Text style={[estilo.text]}>APENAS CADASTROOO</Text>
      </View>

    

      {/*Botão* */}
      <View style={[estilo.fixToText]}>
            <Cadastro />
            <Login />
        </View>

      <Text style={[estilo.senha]}>Esqueceu a senha?</Text>
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
      flex:0,
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
    },
    senha:{
      color:"#8B8B8B",
      borderBottomWidth:1,
      borderBottomColor:"#8B8B8B"
    },
    text:{
      color:"white"
    }
})
