import React, {useState,  useEffect } from "react";
import {
View, 
Text, 

} from "react-native"

import { createStackNavigator } from '@react-navigation/stack';

//Screens
import  SymptomDiariesScreen from "../DiaryNavigatorScreens/SymptomDiariesScreen"
import SymptomLayout from "../DiaryNavigatorScreens/SymptomLayoutScreen"

import HeadachDiariesScreen from '../DiaryNavigatorScreens/HeadachDiariesScreen'

const DiaryTabs =createStackNavigator()


function DiaryScreen(){
   

    return (
        <DiaryTabs.Navigator>
        <DiaryTabs.Screen name="Symptom_Diaries" component={SymptomDiariesScreen} />
        <DiaryTabs.Screen name="SymptomLayout" component={SymptomLayout} />
        <DiaryTabs.Screen name="Headche_Diary" component={HeadachDiariesScreen} />
    </DiaryTabs.Navigator>
      )
}
export default DiaryScreen