import { gql } from '@apollo/client';

export default gql`
query findUser($id:ID, $email:String){
  findUser(id:$id, email:$email){
    id
    email
    headacheDiaries{
      id
      severity
      location
      trigger
      duration
      date
      medication
      improvement
    }
  }
}
`