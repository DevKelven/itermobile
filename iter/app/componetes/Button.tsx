import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import {Link} from 'expo-router';

export function Login(){
    return (
        <TouchableOpacity style={[estilo.container]}>
            {/* <Text style={[estilo.text]}>Login</Text> */}
            <Link style={[estilo.text]} href={"./Inicio"}>Login</Link>
        </TouchableOpacity>
    );
}

export function Cadastro(){
    return (
        <TouchableOpacity style={[estilo.container_cadastro]}>
              <Link style={[estilo.text_cadastro]} href={"/Cadastro"}>Cadastrar</Link>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    container:{
        padding:16,
        backgroundColor:"#2F353C",
        borderRadius:10,
        width:138.8,
        height:48,
    },
    text:{
        color:"#ffffff",
        fontSize: 20,
        textAlign: "center",
        height:48,
        transform: [{translateY:-5}]        
    },
    container_cadastro:{
        padding:16,
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        width:138.8,
        height:48,
    },
    text_cadastro:{
        color:"#212529",
        fontSize: 20,
        textAlign: "center",
        height:48,
        transform: [{translateY:-5}]        
    },

})


