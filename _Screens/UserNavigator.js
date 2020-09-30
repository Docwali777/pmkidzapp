
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tabs = createBottomTabNavigator()
const DiaryTabs =createStackNavigator()

function DiaryList({navigation}){
  return <Text onPress={()=> navigation.navigate("Me")}>List</Text>
}
function Me({navigation}){
  console.log(navigation);
  return <Text onPress={()=>navigation.goBack()} >const [state, dispatch] = useReducer(reducer, initialState, init)</Text>
}

function diary(){
    return (
      <DiaryTabs.Navigator>
      <DiaryTabs.Screen name="List" component={DiaryList} />
      <DiaryTabs.Screen name="Me" component={Me} />
  </DiaryTabs.Navigator>
    )
}
function Medications(props){
    return (
        <View>
            <Text onPress={()=>props.navigation.navigate("PM KIDZ")}>Medications</Text>
        </View>
    )
}

function Home(){
  return <Text>Home</Text>
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

          <Tabs.Screen name="Home"  component={Home}/>
            <Tabs.Screen name="Diary" component={diary}/>
            <Tabs.Screen name="Medication" component={Medications}/>
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