import React, { useState } from "react";
//GQL
import { useQuery, useMutation} from '@apollo/client';
import findUser from "../_GRAPHQL/QUERY/findUser"
import addUser from "../_GRAPHQL/MUTATION/addUser"

import {
    View,
    Text,
    StyleSheet,
    Image, 
    TouchableOpacity, 
    Keyboard
} from "react-native"
import firebase from "../_FIREBASE/firebase.config"

import { useNavigation } from '@react-navigation/native';

//redux
import { useDispatch } from 'react-redux'
import { setUser } from "../_STATE_MANAGEMENT/ACTIONS/UserActions";
import { addHeadacheDiary } from "../_STATE_MANAGEMENT/ACTIONS/HeadacheDiaryActions";

function AuthComponentButton(props){
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [setUserName, {data}] = useMutation(addUser)




    const [errorStatus, setError]= useState(null)

    const LoginOrRegisterScreen = props.loginInfo ? "Register" : "Login"

 
    const Login = ({email, password})=>{

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) =>{
     
           if(user){
            dispatch(setUser(user))

            navigation.navigate("User")
           }
               
     
            })
            .catch(({message, code}) =>{
                console.log({message});
                setError(message)
            })


        // navigation.navigate("User")
    }

    const Register = ({email, password}) =>{
      console.log("registration attempted");
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) =>{
                console.log(user);
               if(user){
                   setUserName({
                       variables: {email: user.email}}
                     )
                
               }
               dispatch(setUser(user))
               navigation.navigate("User")
            })
            .catch(({code, message})=>{
                console.log({code, message});
                setError(message)
            })
    }

if(data){
    dispatch(setUser(data.addUser))

}
    return (
        <View style={styles.container}>


                 <TouchableOpacity onPress={props.loginInfo ? ()=>Login(props.loginInfo): ()=>Register(props.registerInfo)} style={styles.submitButtonContainer}>
                <Text>Submit</Text>
            </TouchableOpacity>
          
            <Text style={ errorStatus ? {borderColor: "red", borderWidth: 1, marginBottom: 15} : {}}>
          {errorStatus ? errorStatus : "" }
          </Text>

          <View style={styles.loginView}>
                <TouchableOpacity onPress={()=>{
                    setError("")
                    navigation.navigate(LoginOrRegisterScreen)
                    
                }} >
                        <Text style={styles.loginText} >{LoginOrRegisterScreen} </Text>
                </TouchableOpacity>
                <Text>for application functionality</Text>

            </View>
         
       
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
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
    loginView: {
        flexDirection: "row"
    }, 
    loginText:{
        color: "blue", 
        fontWeight: "bold"
    }
})

export default AuthComponentButton