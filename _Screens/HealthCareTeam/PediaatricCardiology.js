import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native"

import { Pediatric_Cardiology} from '../../_JSON/providers'
import TeamProfileCard  from '../../_Components/ReUsable/TeamProfileCard'


function Pediatricians(){

    return (
        <View style={styles.container}>
           
           <FlatList
                data={Pediatric_Cardiology}
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
        paddingTop: 10, 
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        backgroundColor: "#FFE792"
    },
    title: {
        fontSize: 17, 
        marginBottom: 7, 
        marginTop: 20
    }, 
    lastProfile: {
        borderBottomWidth: 1,
        marginBottom: 10
    }
})

export default Pediatricians