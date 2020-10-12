import React from "react";

import { 
View, 
Text,
StyleSheet, 
FlatList
} from "react-native"

import ButtonComponent_No_ICON  from '../../_Components/ReUsable/ButtonComponent_No_ICON'




function SymptomLayout({navigation, route}){
console.log(route.params);

    return (
        <View style={styles.container}>
            <Text>{route.params.title}</Text>
            {
                route.params.symptom !== undefined  ? 
              
                   <FlatList
                        data={route.params.symptom}
                        renderItem={({item})=>{
                            console.log(item.id);
                          return (
                            <View key={item.id} style={{borderWidth: 1, width: 300, margin: 10, padding: 5}}>
                                <View style={{}}> 
                                    <Text>Severity </Text>
                                <Text>Duration </Text>
                                <Text>Severity </Text>
                                <Text>Duration </Text>
                                
                                </View>


                            <Text>Duration: {item.duration}</Text>
                            <Text>trigger: {item.trigger} </Text>
                            <Text>Location:{item.location} </Text>


                            </View>
                          )
                        }}

                    />
                 
                 : <Text></Text>
            }
        </View>
    )
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


export default SymptomLayout
