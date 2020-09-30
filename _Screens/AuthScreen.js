import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image, 
    TouchableOpacity
} from "react-native"

//images
import LogoWithStethescope from "../_Images/rsz_logo&stethscope_800x800.png"

//Components
import  LoginComponent from "../_Components/LoginComponent"
import  RegisterComponent from "../_Components/RegisterComponent"

//reUseable Component
import ButtonComponent  from "../_Components/ReUsable/ButtonComponent"
import InputComponent  from "../_Components/ReUsable/InputConponent"

function AuthScreen(props){

    const [previousUser, setUserState]  = useState(true)


    const changeUserState = ()=>{
        setUserState(!previousUser)
    }
    return (
        <View style={styles.container}>

        <Text>
            {
                previousUser ? 
                <LoginComponent {...props} /> : 
                <RegisterComponent {...props} />
            }
        </Text>

         <TouchableOpacity onPress={changeUserState} style={{flexDirection: "row"}}>
         <Text style={styles.registerText} >{previousUser ? "Register" : "Login"}</Text>
            <Text> for an account</Text>
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
    registerText: {
        color: "#1338be", 
        fontWeight: "bold"
    },
   
})

export default AuthScreen