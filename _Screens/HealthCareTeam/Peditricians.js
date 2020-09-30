import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native"

import { General_Pediatricians } from '../../_JSON/providers'
import TeamProfileCard  from '../../_Components/ReUsable/TeamProfileCard'


function Pediatricians(){

    return (
        <View style={styles.container}>
           
           <FlatList
                data={General_Pediatricians}
                keyExtractor={item => item.id}
                renderItem = {({item}) =>{
                    console.log(item);
                    return (
                        <View key={item.id}>
                                <TeamProfileCard {...item} />
                        </View>
                    )
                }}
           />

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#FFE792"
    },
    title: {
        marginBottom: 15, 
        marginVertical: 20, 
        fontSize: 17, 
        fontFamily: "Arial", 
        fontStyle: "italic", 
        fontWeight: "bold"
    }, 
    lastProfile: {
        borderBottomWidth: 1,
        marginBottom: 10
    }
})

export default Pediatricians