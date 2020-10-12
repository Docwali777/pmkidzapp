import React, { useState, userEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image, 
    TouchableOpacity, 
    Keyboard
} from "react-native"
import firebase from "../_FIREBASE/firebase.config"

//images
import LogoWithStethescope from "../_Images/LogoStethscope_800x800.png"

//Component
import ButtonComponent  from "../_Components/ReUsable/ButtonComponent_with_ICON"
import InputComponent  from "../_Components/ReUsable/InputConponent"
import AuthComponentButton from "../_Components/AuthComponent";


function RegisterComponent({navigation, route}){
   console.log("register");
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    

    const authorized = ()=>{
        
        console.log({email, password});

        // navigation.navigate("User")
    }


    return (
        <View style={styles.container}>
           
           <Image style={styles.image} source={LogoWithStethescope} />
            
           <Text style={{fontSize: 25}}>Register</Text>

           <InputComponent 
                onSubmitEditing={() =>{
                    console.log(2);
                    Keyboard.dismiss()
                }}
                blurOnSubmit={false}
                placeholder="Email@xyz.com"
                value={email}
                onChangeText={emailText => {
                    Keyboard
                    setEmail(emailText)
                }}
                autoCorrect={false}
                autoCapitalize="none"
                autoFocus={true}
                returnKeyLabel="done"
                keyboardType="email-address"
                
                
           />

            <InputComponent 
                placeholder="Password"
                value={password}
                onChangeText={password=> setPassword(password)}
                autoCapitalize="none"
                secureTextEntry

            />   


                <AuthComponentButton registerInfo={{email, password}}  />
        

            
       
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        alignItems: "center",
        paddingTop: 10, 
        justifyContent: "center",
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

    }, 

   
})

export default RegisterComponent