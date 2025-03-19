import { Text, View,StyleSheet,Image,TextInput, TouchableOpacity, ScrollView} from "react-native";
import { Cadastro, Login } from "../componetes/Button";
import { Link } from "expo-router";


export default function TelaInicial() {
  return (
    <View style={[estilo.container]}>
     <ScrollView>
     <View style={[estilo.containerBotao]}>
        <TouchableOpacity style={[estilo.botao]}>
            <Image style={{transform: [{translateX:-10}]}} source={require('../../assets/images/relogio.png')}/>
            <Link href={"/"} style={{fontWeight:'400', fontSize:16}}>Horarios</Link>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.botao]}>
            <Image style={{transform: [{translateX:-10}]}} source={require('../../assets/images/perfil.png')}/>
            <Link href={'/BotaoInicio/Perfil'} style={{fontWeight:'400', fontSize:16}}>Perfil</Link>
        </TouchableOpacity>
    </View>

    <View style={[estilo.containerBotao]}>
        <TouchableOpacity style={[estilo.botao]}>
            <Image style={{transform: [{translateX:-10}]}} source={require('../../assets/images/moedas.png')}/>
            <Link href={"/"} style={{fontWeight:'400', fontSize:16}}>Financeiros</Link>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.botao]}>
            <Image style={{transform: [{translateX:-10}], width:37,height:37}} source={require('../../assets/images/matricula.png')}/>
            <Link href={"/"} style={{fontWeight:'400', fontSize:16}}>Matricula</Link>
        </TouchableOpacity>
    </View>
      <View style={[estilo.containerBotao]}>
        <TouchableOpacity style={[estilo.botao]}>
            <Image style={{transform: [{translateX:-10}]}} source={require('../../assets/images/calendario.png')}/> 
            <Link href={"/"} style={{fontWeight:'400', fontSize:16}}>Calendario</Link>
        </TouchableOpacity>
        
        <TouchableOpacity style={[estilo.botao]}>
            <Image style={{transform: [{translateX:-10}]}} source={require('../../assets/images/contato.png')}/>
            <Link href={"/"} style={{fontWeight:'400', fontSize:16}}>Contatos</Link>
        </TouchableOpacity>
      </View>

      <View style={[estilo.mensagens]}>
        <Text style={{fontSize:24, fontWeight:'700'}}>
        📢 Atenção, alunos!
        </Text>
        <Text style={{fontSize:24, fontWeight:'700', alignItems:'center', textAlign:'center'}}>
        A rematrícula para o 2º semestre de 2025 está chegando! Garanta sua vaga e evite imprevistos. Não deixe para a última hora! Fique atento às datas e realize sua rematrícula no prazo. 📅✅ Contamos com você! 🎓✨
        </Text>
      </View>

      <View style={[estilo.mensagens]}>
        <Text style={{fontSize:24, fontWeight:'700'}}>
        🚍 Atenção, alunos!
        </Text>
        <Text style={{fontSize:24, fontWeight:'700', alignItems:'center', textAlign:'center'}}>
        O pagamento do ônibus para Santa Ernestina foi adiado. Fiquem atentos para novas atualizações sobre a nova data de pagamento. Agradecemos a compreensão! ✅
        </Text>
      </View>


      </ScrollView>
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
    containerBotao:{
        flex: 1,
        flexDirection:'row',
        gap: 60,
        marginTop:40,
        
    },
      botao:{
        width: 159,
        height: 88,
        backgroundColor:'white',
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        fontWeight:'bold',
        flex: 0,
        flexDirection:'row',
        gap:10,
      },
      mensagens:{
        marginTop:50,
        width:364,
        height:341,
        backgroundColor:'white',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        gap:30,
      }
    }
)
