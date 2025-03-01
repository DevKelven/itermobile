import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";

export function Login(){
    return (
        <TouchableOpacity style={[estilo.container]}>
            <Text style={[estilo.text]}>Login</Text>
        </TouchableOpacity>
    );
}

export function Cadastro(){
    return (
        <TouchableOpacity style={[estilo.container_cadastro]}>
            <Text style={[estilo.text_cadastro]}>Cadastro</Text>
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


