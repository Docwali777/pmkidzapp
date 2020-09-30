import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image, 
    TouchableOpacity
} from "react-native"
import firebase from "../_FIREBASE/firebase.config"

//images
import LogoWithStethescope from "../_Images/LogoStethscope_800x800.png"

//Component
import ButtonComponent  from "./ReUsable/ButtonComponent"
import InputComponent  from "./ReUsable/InputConponent"


function RegisterComponent(props){

    const { navigation } = props

    const [email, setEmail] = useState("")

    const authorized = ()=>{
        navigation.navigate("User")
    }


    return (
        <View style={styles.container}>
       
           <Image style={styles.image} source={LogoWithStethescope} />
            
           <Text style={{fontSize: 25}}>Register</Text>


           <InputComponent 
                placeholder="Email@xyz.com"
                value={email}
                onChangeText={email => setEmail(email)}
                
           />

            <InputComponent 
                placeholder="Password"
                vale={""}

            />   
            <TouchableOpacity onPress={authorized} style={styles.submitButtonContainer}>
                <Text>Submit</Text>
            </TouchableOpacity>
       
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        alignItems: "center",
        paddingTop: 10, 
        // backgroundColor: "#FFE792"
    },
    image: {
        width: 300,
        height: 300,
        shadowColor: "#000", 
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 4, 
            width: 5
        }, 
        shadowRadius:5, 

    }, 
    submitButtonContainer: {
        backgroundColor: "#fff",
        marginBottom: 20,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#FFE792",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        height: 30, 
        shadowColor: "#000", 
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 4, 
            width: 5
        }, 
        shadowRadius:5, 

    }
   
})

export default RegisterComponent