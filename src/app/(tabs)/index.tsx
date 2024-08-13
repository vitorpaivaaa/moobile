import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Button from "@/src/Button/Button";
import { AntDesign } from '@expo/vector-icons';




export default function Home(){
return (
    
<View style={{flex:1}} >
<ScrollView  >
    <View>
    <Image source={require("@/src/images/cat.png")}>

    </Image>
  </View>

<View  style={style.formContainer}>
  <View >
   <Text style={{color:"#01377D", fontSize:30, paddingTop:22, paddingLeft:30, fontWeight: "bold"}}>
    Zeca
   </Text>
   <Text style={{fontSize:16,paddingLeft:30, paddingTop:5 }} >Gato|Macho|Pequeno Porte</Text>
    
</View>
<View style={{flexDirection:"row", paddingTop:10, paddingLeft:22}}>

<Entypo name="location-pin" size={37} color="#7FD349"  />

<Text style={{ paddingTop:7, paddingLeft:5, fontSize:16 }} >Está em São Paulo, São Paulo</Text>
</View>

<View style={{flexDirection:"row", paddingTop:10, paddingLeft:30}}>
<FontAwesome6 name="user-large" size={24} color="#7FD349" />
<Text style={{fontSize:16, paddingLeft:10}}>
    Publicada por 
</Text>
<Text style={{fontSize:16, color:"#7FD349", }}> Ana de Fatima Moreira</Text>

</View>
<View>
<Text style={{fontSize:25, paddingLeft:30,paddingTop:30, color:"#7FD349", }}>História de Zeca</Text>
</View>
<View>
    <Text style={{paddingTop:20,   textAlign:"left", paddingLeft:40,paddingRight:50, alignItems:"center"}}>
    Zeca é um gato jovem, de aproximadamente 1 ano, cheio de energia e carisma. Resgatado das ruas, ele está em busca de um lar amoroso para chamar de seu. Castrado, vacinado e saudável, Zeca é um companheiro brincalhão e afetuoso, pronto para alegrar a vida de sua futura família. Se você está pronto para receber amor incondicional, Zeca está pronto para conquistar seu coração.
    </Text>
    </View>
    <View>
   <Text style={{fontWeight:"bold", fontSize:25, paddingTop:30, color:"#7FD349", paddingLeft:30}}>
    Mais detalhes sobre zeca
   </Text>
   <View style={{paddingLeft:20, paddingTop:20, flexDirection:"row", }}>
    <View style={{paddingLeft:10}}>
   <Text style={{  borderRadius:15, textAlign:"center", height:40,width:90, paddingTop:10, color:"#01377D", fontSize:14, backgroundColor: "#b0c4de"}}>
    Dócil  
   </Text>
   </View>

<View style={{paddingLeft:10}}>
   <Text style={{ borderRadius:15, textAlign:"center", height:40,width:120, paddingTop:10, color:"#01377D", fontSize:14, backgroundColor: "#b0c4de"}}>
    Vermifugado
   </Text>
   </View>
   <View style={{paddingLeft:10,}}>
   <Text style={{  borderRadius:15, textAlign:"center", height:40,width:100, paddingTop:10, color:"#01377D", fontSize:14, backgroundColor: "#b0c4de"}}>
    Brincalhão
   </Text>
   </View>
   </View>

   <View style={{paddingLeft:20, paddingTop:20, flexDirection:"row", }}>
    <View style={{paddingLeft:10}}>
   <Text style={{borderRadius:15, textAlign:"center", height:40,width:100, paddingTop:10, color:"#01377D", fontSize:14, backgroundColor: "#b0c4de"}}>
    Castrado  
   </Text>
   </View>

<View style={{paddingLeft:10}}>
   <Text style={{borderRadius:15, textAlign:"center", height:40,width:120, paddingTop:10, color:"#01377D", fontSize:14, backgroundColor: "#b0c4de"}}>
    Vacinado
   </Text>
   </View>
   <View style={{paddingLeft:10}}>
   <Text style={{borderRadius:15, textAlign:"center", height:40,width:90, paddingTop:10, color:"#01377D", fontSize:14, backgroundColor: "#b0c4de"}}>
    Sociável
   </Text>
   </View>

   </View>
  <View style={{flexDirection:"row", paddingTop:20, paddingHorizontal:25}}>
   <AntDesign name="hearto" size={50} color="#01377D" style={{paddingRight:10}}/>
  
    <Button/>
   </View>
   </View>
    </View>
    </ScrollView>


</View>

)
}   
const style = StyleSheet.create({
formContainer:{
    backgroundColor: "#fff",
    borderRadius:80,
    paddingTop:10,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:50,
    margin:-30,
    width:470,
    flexGrow:1,
    justifyContent:'center',
    elevation:3,
    

}
})

