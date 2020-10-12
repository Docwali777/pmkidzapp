import React , { useState, useEffect }from "react"

import { useSelector } from "react-redux"
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList,
    TouchableOpacity
} from "react-native"

import { Ionicons } from '@expo/vector-icons'; 

import { Appbar } from "react-native-paper"

//Components
import SymptomComponentView  from "../../_Components/SymptomComponentView"
import SymotomsInputComponent from "../../_Components/SymotomsInputComponent"

//GQL
import { useQuery } from "@apollo/client"
import findUser from "../../_GRAPHQL/QUERY/findUser"

//firebase
import firebase from "../../_FIREBASE/firebase.config"
import UserReducer from "../../_STATE_MANAGEMENT/REDUCERS/UserReducer"

function UserHomeScreen({navigation, route}){

    const [visible, setVisibility] = useState(true)

    const headaches = useSelector(headaches => headaches.HeadacheReducer)
    
    const { email } = useSelector(user => user.UserReducer.user )
    const { loading, error, data } = useQuery(findUser, {
        variables: {email}
    })

 
    if(loading) return <Text>Loading</Text>
    if(error) return <Text>Error</Text>

    if(data){
        const { id, headacheDiaries } = data.findUser
        console.log({headacheDiaries, id});
       
        return (
         <View  style={styles.container}>
                   <Appbar style={styles.bottom}>
        <Appbar.Action icon={visible ? "check-outline" : "plus-circle"} onPress={()=> setVisibility(!visible)} />
        {/* <Appbar.Action icon="plus-circle"  onPress={()=> setVisibility(!visible)} /> */}
        {/* <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} /> */}

      </Appbar>

            <View style={{alignItems: "center"}}>

            <TouchableOpacity onPress={()=> setVisibility(!visible)} > 
             {/* {
                 visible ? 
                 <Ionicons name="ios-checkmark-circle" size={50} color="#83F52C" /> :
                 <Ionicons name="ios-add-circle" size={50} color="#00a2ed" />
             } */}
             </TouchableOpacity>

           {
               visible ?
               <View style={{}}>
               <SymotomsInputComponent />
            </View> :
          
          <View style={{ marginTop: 7, marginBottom: 60, alignItems: "center"}}>

            <FlatList 
              data={headacheDiaries}
              renderItem={({item})=> <SymptomComponentView {...item} />}
            />
         
          </View>
           }


    

            </View>

         </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
  
    }, 
    bottom: {
        backgroundColor: "red"
    }

})

export default UserHomeScreen