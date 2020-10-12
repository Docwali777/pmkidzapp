import React from "react";
import {  useSelector, useDispatch } from "react-redux"
import { 
View, 
Text,
StyleSheet
} from "react-native"

//Icons



import CardComponent from "../../_Components/ReUsable/CardComponent"

//GQL
import { useQuery } from "@apollo/client"
import findUser from "../../_GRAPHQL/QUERY/findUser"

//State Management
import { addHeadacheDiary} from "../../_STATE_MANAGEMENT/ACTIONS/HeadacheDiaryActions"


function SymtomsDiariesScreen({navigation}){

    const dispatch = useDispatch()

    //user State
    const {email} = useSelector(user => user.UserReducer.user)

    const {loading, error, data} = useQuery(findUser, {
        variables: {email}
    })

  
if(loading) return <Text>...Loading...</Text>
if(error){
    console.log(error)
    return <Text>...console.error();</Text>
}


if(data){
    const { headacheDiaries, id} =data.findUser;
    console.log(headacheDiaries);
    const symptomDiaries = [
        {
            path: "Headche Diary",
            diaryArray: headacheDiaries, 
            routeDiaryScreen: "Headche_Diary", 
            userID: id
        
        }, 
        // {
        //     path: "Abdominal Pain", 
        //     array: "abdominalPainDiaries"
        // }, 
        // {
        //     path: "Chest Pain", 
        //     array: "chestPainDiaries"
        // }
    ]
   
    return (
        <View style={styles.container}>
            {
               symptomDiaries.map(({path, diaryArray, routeDiaryScreen, userID}) =>{

                   return (
                        <CardComponent 
                            title={path} 
                            key={path} 
                            onPress={()=> navigation.navigate(routeDiaryScreen, {diaryArray, userID})}

                            />
                   )
               }) 
            }

            <View>
            
            </View>
        </View>
    )
}
    
   
  }

  const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10, 
        // backgroundColor: "#FFE792"
    },
   
   
})


export default SymtomsDiariesScreen
