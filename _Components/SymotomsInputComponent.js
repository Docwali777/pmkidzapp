import React, { useState} from "react";
import { useSelector } from "react-redux"
import { 
View, 
Text,
StyleSheet,
KeyboardAvoidingView, 
Keyboard,
TouchableWithoutFeedback,

} from "react-native"

//Components
import InputConponent from "../_Components/ReUsable/InputConponent"

import { TextInput, Button, } from 'react-native-paper';
//GQL query
import { useQuery, useMutation } from "@apollo/client"
import findUser from "../_GRAPHQL/QUERY/findUser"

//GQL mutation
import addUserHeadacheDiary from "../_GRAPHQL/MUTATION/addUserHeadacheDiary"


function PaperTextInput(props){
    return (
    <TextInput
        {...props}
    />
    )
}

function SymptomInputComponent(){

        const [severity, setSeverity] = useState("") 
        const [location, setLocation] = useState("") 
        const [trigger, setTrigger] = useState("") 
        const [duration, setDuration] = useState("") 
        const [medication, setMedication] = useState("") 
        const [improvement, setImprovement] = useState("") 

        //error
        const [errorMessage, setErrorMessage] = useState({message: "", visible: false})

        const [ addToHeadaceUserDiary ] = useMutation(addUserHeadacheDiary)

        const {email} = useSelector(user => user.UserReducer.user)
    
        const {loading, error, data } = useQuery(findUser, {
            variables: {email}
        })

         const setUserDiaryData = (id) =>{
            if(location !== "" && severity !== "" && location !== "" && trigger !=="" && duration !=="" && id && medication !== "" && improvement !== ""){
                addToHeadaceUserDiary({
                    variables: {location, severity, location, trigger, duration, id, medication, improvement}, 
                    refetchQueries: [
                        {
                            query: findUser, 
                            variables: {id}
                        }
                    ]
                })
                setSeverity("")
                setLocation("")
                setTrigger("")
                setDuration("")
                setMedication("")
                setImprovement("")
                setErrorMessage({message: "", visible: false});
            } else {
                setErrorMessage({message: "all fields need to be completed", visible: true});
            }
         

        
         }

    if(loading) return <Text>Loading</Text>
    if(error)return <Text>Error</Text>

    if(data){
        const { id } = data.findUser
        return (
       
            <View 
            behavior={"padding"}
            style={styles.container}
            >
    

              <View style={ errorMessage.visible ? styles.errorMessageContainer : null}>
              <Text > {errorMessage.visible !=="" ? errorMessage.message : ""} </Text>
              </View>

                  <>
                  <TextInput 
                        style={{marginBottom: 5}}
                       placeholder="Scale 0 - 10"
                       onChangeText={severity => setSeverity(severity) }
                       autoCorrect={false}
                       value={severity}
                       label="Severity"
                       mode="outlined"
                       
                       />   
                        <TextInput 
                          style={{marginBottom: 5}}
                       placeholder="What caused the pain"
                       onChangeText={trigger => setTrigger(trigger) }
                       autoCorrect={false}
                       value={trigger}
                       label="Trigger"
                       mode="outlined"
                       />           

                        <TextInput 
                          style={{marginBottom: 5}}
                       placeholder="Where do you feel the pain"
                       onChangeText={location => setLocation(location) }
                       autoCorrect={false}
                       value={location}
                       label="Location"
                       mode="outlined"
                       />  
                        <TextInput 
                          style={{marginBottom: 5}}
                       placeholder="Duration"
                       onChangeText={duration => setDuration(duration) }
                       autoCorrect={false}
                       value={duration}
                       label="Duration"
                       mode="outlined"
                       />  
                          <TextInput 
                            style={{marginBottom: 5}}
                       placeholder="Medication"
                       onChangeText={medication => setMedication(medication) }
                       autoCorrect={false}
                       value={medication}
                       label="Medication"
                       mode="outlined"
                       />  
                          <TextInput 
                           style={{marginBottom: 5}}
                       placeholder="What Makes the Pain less"
                       onChangeText={improvement => setImprovement(improvement) }
                       autoCorrect={false}
                       value={improvement}
                       label="Improvement"
                       mode="outlined"
                       />  

                  </>
           
    
                       <Button onPress={()=>setUserDiaryData(id)} title="Enter" >
                          
                           </Button>
                           
    
                           <Button icon="check" mode="contained" color="#99ff99" onPress={()=>setUserDiaryData(id)}>
                                   Submit
                            </Button>
            
                    </View>
          
        )
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1, 
    width: 300, 
 
 
},    
errorMessageContainer: {
    borderWidth: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 5,
    height: 30, 
    borderColor: "red", 
    borderRadius: 20
}
})


export default SymptomInputComponent