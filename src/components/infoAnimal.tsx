import { Text } from "react-native";

interface InfoAnimalProps {
    title: string
}

const InfoAnimal = ({
    title
}: InfoAnimalProps) => {
    return(
        <Text style={{
            borderRadius:15,
            textAlign:"center",
            height:40,
            width:90,
            paddingTop:10,
            color:"#01377D",
            fontSize:14,
            backgroundColor: "#b0c4de"}}>{title}</Text>
    );
};

export default InfoAnimal;