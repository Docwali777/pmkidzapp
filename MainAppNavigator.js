import React from "react"

import { ApolloClient, InMemoryCache } from '@apollo/client';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from "./_Screens/HomeScreen"
import MainScreen from "./_Screens/MainScreen"
import TeamScreen from "./_Screens/TeamScreen"


import PediatriciansScreen from "./_Screens/HealthCareTeam/Peditricians"
import PediatricCardiologyScreen from "./_Screens/HealthCareTeam/PediaatricCardiology"

import LoginScreen from "./_Screens/LoginScreen"
import RegisterScreen from "./_Screens/RegisterScreen"

//User tabs
import UserNavigator from "./_Screens/UserNavigator"

//components
import LogOutButton from "./_Components/LogOutButton"

const Stack = createStackNavigator()


const AuthOptions = {
  headerBackImage: ()=>{}, 
  headerBackTitleVisible: false,
   headerTitle: "Welcome", 
   headerRight: props=> <LogOutButton />
  
  }

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

function AppNavigator(){

  return(
   <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerBackImage: ()=>{}, headerBackTitleVisible: false}} name="Main" component={MainScreen}   />
          <Stack.Screen name="Team" component={TeamScreen}   />

          <Stack.Screen name="Pediatricians" component={PediatriciansScreen}   />
          <Stack.Screen name="Pediatric Cardiology" component={PediatricCardiologyScreen} />  
           <Stack.Screen name="Login"  component={LoginScreen} /> 
          <Stack.Screen name="Register"  component={RegisterScreen} />
          <Stack.Screen name="User" options={AuthOptions} component={UserNavigator} />
          

        
      </Stack.Navigator>
   </NavigationContainer>
  )
}




export default AppNavigator