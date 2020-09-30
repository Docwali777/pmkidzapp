
import React from "react"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"



import { useNavigation} from '@react-navigation/native';



function LogOutButton(){
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={()=> navigation.navigate("Main")} style={{marginRight: 20}}>
            <AntDesign  name="logout" size={30} color="red" />
        </TouchableOpacity>
       )
}

export default LogOutButton