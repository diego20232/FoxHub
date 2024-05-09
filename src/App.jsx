import React, {useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FoxHub from "./components/FoxHub";



export default () => {







    return (
        <View style={style.fundo}>
            <Image source={require('./imagens/foxHub.png')} style={style.imagem}/>
            <FoxHub/>
        </View>
    )
}

const style = StyleSheet.create(
    {
        fundo: {
           backgroundColor: '#FFFFFF',
           flex: 1,
           flexDirection: 'column'
        },
        imagem: {
            marginTop: 50,
        }
    }
)