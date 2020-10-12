import { gql } from "@apollo/client";


export default gql`

mutation addUseerHeadacheDiary($id:ID, $location:String, $trigger: String, $duration:String, $severity:String, $medication: String, $improvement:String){
  addUserHeadacheDiary(id:$id, location:$location, trigger:$trigger, duration:$duration, severity:$severity, medication:$medication, improvement:$improvement){
	id
    severity
   location
    duration
    trigger
    medication
    improvement
  }
  
} 

`