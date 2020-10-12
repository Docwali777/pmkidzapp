

import React from "react"
import {
    Button, 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity
} from "react-native"



function ButtonComponent({title, onPress, buttonContainerStyle}){
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.container, ...buttonContainerStyle}}>
          
            <Text style={styles.textTitle}>
                    {title}
            </Text>
       
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        // borderWidth: 1, 
        margin: 10,
        height: 50, 
        width: 250, 
        flexDirection: "row",
        justifyContent: "space-around", 
        alignItems: "center", 
        borderRadius: 40, 
        shadowOffset: {
            height: 6, 
            width: 7
          },
          shadowOpacity: 0.3,
          shadowRadius: 2, 
          shadowColor: "#000"

    }, 
    textTitle: {
     
    
    },  
})

export default ButtonComponent