
import React, { useEffect} from 'react';
import { StyleSheet, Text, Alert, View, Image, Button, Linking, Platform, TouchableOpacity } from 'react-native';
import Logo from "../_Images/Logo2.png"

import  * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"

import KidsWithArmInTheAir from "../_Images/KidsIwthArmsInTheAir_brown.png"
import  Doctor_Examining_Child from "../_Images/Doctor_Examining_Child.png"
import KidsRunningTogetherOnGrass from "../_Images/KidsRunningTogetherOnGrass.png"
import BabyNeonate from "../_Images/1410.png"

import ButtonComponent from "../_Components/ReUsable/ButtonComponent_with_ICON"
import { TextInput } from 'react-native-gesture-handler';

const images= [KidsWithArmInTheAir, Doctor_Examining_Child, KidsRunningTogetherOnGrass, BabyNeonate ]

Notifications.setNotificationHandler({
  handleNotification: async()=>{
    return {
        shouldShowAlert: true,
        shouldPlaySound: true
    }
  }
})

export default function App({navigation}) {

  useEffect(()=>{
    getStatus()
  }, [])

  const getStatus = async()=>{
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then(statusObj =>{
        if(statusObj.status !== "granted"){
    
          return Permissions.askAsync(Permissions.NOTIFICATIONS)
        }
        console.log(statusObj);
        return statusObj
      }).then(statusObj =>{
        if(statusObj.status !=="granted"){
          console.log("not granted, notifacations can not be sent");
          Permissions.askAsync(Permissions.NOTIFICATIONS)
          return;
        }
      }).catch(e => console.log(e))
  }
  
  const triggerNotification = () =>{
  
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Great Notification", 
          body: "Time"
        }, 
        trigger: {
          seconds: 3
        }
      })
  }

  return (
    <View style={styles.container}>


        <TouchableOpacity 
            style={styles.enterButton}
            onPress={()=>navigation.navigate("Main")}>
            <Text style={styles.enterText}>Enter</Text>
        </TouchableOpacity>

        < Image 
          source={Logo}
          style={styles.logo}
          />
 
     <View style={styles.picCollage}>
       

        <View style={{borderWidth: 1, width: 300, marginBottom: 20}} />

            {images.map((image, i) =>{
              return (
                <View key={image} style={styles.picView}> 
                  <Image 
                style={styles.imageCollagePics}
                source={image} 
                />
                </View>
              )
            })}
     
          </View>

          
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    justifyContent: "center",
    alignItems: "center",
    flex: 1, 
    
  },
  enterButton: {
    backgroundColor: "#3fab36",
    margin: 10, 
    // borderWidth: 0.4, 
    borderRadius: 10, 
    width: 150, 
    alignItems: "center", 
    justifyContent: "center",
    height: 40,
    shadowOffset: {
        height: 4, 
        width: 5
      },
      shadowOpacity: 0.4,
      shadowRadius: -10, 
      shadowColor: "#808080"

  },
  enterText: {
    fontSize: 25, 
    color: "#fff",
    fontWeight: "bold"
  },
  logo: {
    height: 150, 
    width: 370
  },
  
  picCollage: {
    flexDirection: "row", 
    width: 300,
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  
  }, 
  imageCollagePics: {
    width: 140, 
    height: 140, 
    margin: 5, 
    marginTop: 10
  }, 
  picView: {
    shadowOffset: {
      height: 10, 
      width: 7
    },
    shadowOpacity: 0.7,
    shadowRadius: 10, 
    shadowColor: "#808080"
  }
});
