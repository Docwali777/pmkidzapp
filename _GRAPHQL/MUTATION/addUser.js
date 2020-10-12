import { gql } from "@apollo/client"


export default gql`
    mutation addUser($email: String){
  addUser(email:$email){
    id
    email
    headacheDiaries{
      id
    }
  }
}

`