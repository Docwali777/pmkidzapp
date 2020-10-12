import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import {
View, 
Text, 
TextInput, 
StyleSheet, 
Button
} from "react-native";

import { Header } from "react-native-paper"



function WelcomeScreen(){



return (
    <View style={styles.container}>
        <View style={styles.headerTextContainer}>
            <Text style={styles.headerText} >Welcome to PM Kidz</Text>
           
        
           <Text style={{color: "#fff", fontSize: 30, width: 300}}  >Pediatric primary and acute care clinic.</Text>

           <Text style={{color: "#fff", marginTop: 50, fontSize: 30}}>Beta IOS App </Text>
        
        </View>
    </View>
)
        
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1f4898", 
     

    },
    headerTextContainer: {
        alignItems: "center", 
    
        flexWrap:"wrap",
        textAlign: "center" 
    },
    headerText: {
        color: "#fff", 
        fontSize: 40, 
        fontWeight: "bold",
        textAlign: "center" ,
        
    },
   
   
})


export default WelcomeScreen