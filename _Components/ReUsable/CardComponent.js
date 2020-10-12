import React from "react";
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity
} from "react-native";

import { Ionicons } from '@expo/vector-icons';


function CardComponent({title, onPress}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.textContainer}>
            <Text  style={styles.text}>{title}</Text>
            </View>
            <Ionicons name="ios-arrow-forward" size={23} color={"#A9A9A9"} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#D0D0D0",
        width:  "99%", 
        height: 45, 
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 7, 
        backgroundColor: "#fff",
        shadowOffset: {
            height: 4, 
            width: 7
          },
          shadowOpacity: 0.5,
          shadowRadius: 1, 
          shadowColor: "#A9A9A9"
    }, 
    text: {
        marginLeft: 0, 
        fontSize: 20
    }, 
    textContainer:{
       alignItems: "flex-start",
       width: 150
    }
})

export default CardComponent