import React from "react"

//components
import ButtonComponent from "../_Components/ReUsable/ButtonComponent_with_ICON"

//images
import pmkidz_positve_wall from '../_Images/pmkidz_positve_wall.png'

import {
View, 
Text,
StyleSheet, 
TouchableOpacity, 
Linking, 
Platform,
ImageBackground
} from "react-native";

import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


function MainScreen({navigation}){
console.log();"Main"
    const callOffice = () =>{
        Linking.openURL("tel:12405857128")
            .catch(e =>console.log("error calling office"))
    }
    const makeAppointment = () =>{
        Linking.openURL("https://www.pmkidz.com/appointments")
        .catch(e =>console.log("error making appointment"))
    }
    const getDirections = ()=>{
        if(Platform.OS === "androind"){

        } else {
            return Linking.openURL("https://www.google.com/maps/place/603+Post+Office+Rd+STE+107,+Waldorf,+MD+20602/@38.6053133,-76.9037063,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7a0c72846fd8b:0x6a604595f9e94d3a!8m2!3d38.6053133!4d-76.9015176")
            .catch(e =>console.log("error opening map"))
        }
    }
    

    //create List for Client Services
    const clientServiceList = [
        {
            title: "Client Features", 
            onPress: ()=> navigation.navigate("Login"),
            icon: <AntDesign name="login" size={24} color="black" />
        }
    ]

    //Create list for business
    const businessList = [
        {
            title: "Call Office", 
            onPress: callOffice, 
            icon: <Feather name="phone-call" size={24} color="black" /> 
        },
        {
            title: "Appointment", 
            onPress: makeAppointment,
            icon:  <MaterialIcons name="schedule" size={24} color="black" />
        }, 
        {
            title: "Directions", 
            onPress: getDirections,
            icon: <Entypo name="direction" size={24} color="black" />
        }, 
        {
            title: "Team", 
            onPress: ()=> navigation.navigate("Team"),
            icon: <AntDesign name="team" size={24} color="black" />
        }
    ]
    

    return (
      
        <View  style={styles.container} >
             {
                clientServiceList.map((component, i)=>{
                    const {title, onPress, icon}  = component
                  return (
                    <ButtonComponent key={i} onPress={onPress} title={title}  >
                        {icon}
                    </ButtonComponent>
                  )
                })
            }

            <View style={styles.divider} />

            {
                businessList.map((component, i)=>{
                    const {title, onPress, icon}  = component
                  return (
                    <ButtonComponent key={i} onPress={onPress} title={title}  >
                        {icon}
                    </ButtonComponent>
                  )
                })
            }
        </View>
     
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        resizeMode: "cover",
        paddingTop: 40,  
        alignItems: "center",
        // backgroundColor: "#FFE792"
        backgroundColor: "#1f4898", 
    }, 
    divider: {
        borderWidth: 1, 
        width:300, 
        borderColor: "#a9a9a9",
        marginBottom: 10, 
        marginTop: 15
    }
})

export default MainScreen