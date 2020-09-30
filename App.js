import React from "react"




import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from "./_Screens/HomeScreen"
import MainScreen from "./_Screens/MainScreen"
import TeamScreen from "./_Screens/TeamScreen"
import AuthScreen from "./_Screens/UserNavigator"

import PediatriciansScreen from "./_Screens/HealthCareTeam/Peditricians"
import PediatricCardiologyScreen from "./_Screens/HealthCareTeam/PediaatricCardiology"

import ClientLoginScreen from "./_Screens/AuthScreen"

//components
import LogOutButton from "./_Components/LogOutButton"

const Stack = createStackNavigator()


const AuthOptions = {
  headerBackImage: ()=>{}, 
  headerBackTitleVisible: false,
   headerTitle: "Welcome", 
   headerRight: props=> <LogOutButton />
  
  }

function AppNavigator(){

  return(
   <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerBackImage: ()=>{}, headerBackTitleVisible: false}} name="Main" component={MainScreen}   />
          <Stack.Screen name="Team" component={TeamScreen}   />

          <Stack.Screen name="Pediatricians" component={PediatriciansScreen}   />
          <Stack.Screen name="Pediatric Cardiology" component={PediatricCardiologyScreen} />
          <Stack.Screen name="Login" component={ClientLoginScreen} />
          <Stack.Screen name="User" options={AuthOptions} component={AuthScreen} />
          

        
      </Stack.Navigator>
   </NavigationContainer>
  )
}

const p = (obj)=>{
  return new Promise((res, rej)=>{
   if(obj === 2){
     res(true)
   } else if(obj === undefined) {
      rej("Please enter a number")
   }
  })
}



p().then(d =>console.log(d)).catch(e=> console.log(e))

export default AppNavigator