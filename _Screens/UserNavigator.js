
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import UserHomeScreen from "./UserNavigatorScreens/UserHomeScreen"
import LoadingScreen from "./UserNavigatorScreens/WelcomeScreen"

import DiaryScreen from "./UserNavigatorScreens/DiaryScreen_NAV"

const Tabs = createBottomTabNavigator()
const DiaryTabs = createStackNavigator()




function Medications(props){
    return (
        <View>
            <Text onPress={()=>props.navigation.navigate("PM KIDZ")}>Medications</Text>
        </View>
    )
}


function UserScreen() {
  

  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home'
         
        } else if (route.name === 'Medication') {
          iconName = 'ios-list';
        } else if (route.name === 'Diary') {
          iconName = "ios-book"
        } else if(route.name === "Welcome"){
          iconName = "ios-heart"
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
          <Tabs.Screen name="Welcome"   component={LoadingScreen} />
          {/* <Tabs.Screen name="Home"  component={UserHomeScreen}/> */}
            <Tabs.Screen screenOptions={{tabBarVisible: false}} name="Diary" component={DiaryScreen}/>
            {/* <Tabs.Screen name="Medication" component={Medications}/> */}
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    justifyContent: "center",
    alignItems: "center",
    flex: 1, 
  }
});


export default UserScreen