import React from "react"

//components
import ButtonComponent from "../_Components/ReUsable/ButtonComponent"


import {
View, 
StyleSheet, 
} from "react-native";

function TeamScreen({navigation}){


    

    return (
        <View style={styles.container}>

            <ButtonComponent 
                title="Pediatricians" 
                onPress={()=>navigation.navigate("Pediatricians")} />

            <ButtonComponent 
                title="Pediatric Cardiology" 
                onPress={()=>navigation.navigate("Pediatric Cardiology")} />
             
     
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingTop: 50,
        backgroundColor: "#FFE792"


    }
})

export default TeamScreen