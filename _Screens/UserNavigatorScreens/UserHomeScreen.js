import React , { useState, useEffect }from "react"

import DropDownPicker from 'react-native-dropdown-picker';
import { Appbar } from "react-native-paper"

import { Ionicons } from "@expo/vector-icons"

import { useSelector } from "react-redux"
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList,
} from "react-native"

//Components
import SymptomComponentView  from "../../_Components/SymptomComponentView"

//GQL
import { useQuery } from "@apollo/client"
import findUser from "../../_GRAPHQL/QUERY/findUser"

//firebase
import firebase from "../../_FIREBASE/firebase.config"
import UserReducer from "../../_STATE_MANAGEMENT/REDUCERS/UserReducer"


function UserHomeScreen({navigation, route}){

    const [ country, setCountry] = useState("0")

    const headaches = useSelector(headaches => headaches.HeadacheReducer)
    
    const { email } = useSelector(user => user.UserReducer.user )

    const { loading, error, data } = useQuery(findUser, {
        variables: {email}
    })

 
    if(loading) return <Text>Loading</Text>
    if(error) return <Text>Error</Text>

    console.log(country);
  return (
      <View style={{marginTop:0}}>
           <Appbar style={styles.bottom}>
        <Appbar.Action icon="check-circle-outline" onPress={() => console.log("Pressed Check") } />
        <Appbar.Action icon="microphone"  onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
      </Appbar>
          
      </View>
  )
    
}

const styles = StyleSheet.create({
    bottom: {
    //   position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "red"
    },
  });

export default UserHomeScreen