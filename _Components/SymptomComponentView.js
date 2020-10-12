import React from "react";
import { 
View, 
Text,
StyleSheet

} from "react-native"


function SymptomComponentView({location, severity, trigger, duration, date, medication, improvement}){
    return (
        
      <View style={styles.background}>
            <View  style={styles.container}>
        <View  >
            <View>
               {
                   [ "Date","Location", "Severity", "Duration", "Trigger", "Medication", "Improvement"].map((symptom, i)=>{
                       return (
                        <View key={i}  style={{borderBottomWidth: 1, paddingBottom: 4, marginTop: 2}}>
                        <Text >{symptom}: </Text>
                        </View>
                       )
                   })
               }
            </View>
        </View>

        <View>
          {
              [date, location, severity, duration, trigger, medication, improvement].map((s, i, arr)=>{
    
                  console.log(arr.length-1 ===i ? new Date(s*1): '');
                  return (
                      <View key={i} style={styles.card} >
                          
                          <Text> 
                              {i === 0 ? (`${new Date(s*1)}`).split("GMT")[0] : `${s}` }
                              </Text>
                          </View>

                      
                  )
              })
          }
        </View>

    </View>
      </View>
    )
}

const styles = StyleSheet.create({
    background:{
        shadowOffset: {
            height: 6, 
            width:20
          },
          shadowOpacity: 0.3,
          shadowRadius: 2, 
          shadowColor: "#000", 
          
    },
    container: {
        flexDirection: "row", 
        borderWidth: 1, 
        padding: 5, 
        marginBottom: 5, 
       
        backgroundColor: "#fff",
          width: 300,
          
    }, 
    card: {
        
          borderBottomWidth: 1, 
          paddingBottom: 4, 
          marginTop: 2, 
          paddingLeft: 3, 
    }, 
    component: {
        
    }
})


export default SymptomComponentView


