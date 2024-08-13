import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";


interface ButtonProps{
    title:String;
    OnPress:() => void
}
export default function Button(){
    return (
        
        <View >       
         <TouchableOpacity style= {style.container}>
            <Text style={style.title}>Quero adotar</Text>
        </TouchableOpacity>
</View>
    );
}
const style = StyleSheet.create({
    container:{
    padding:10,
    backgroundColor:"#01377D",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:20,
    width:280,
    height:50
    },
    title:{
    color:"#FFFFFF",
    fontSize:24,
    textAlign:"center"
    


    }
});