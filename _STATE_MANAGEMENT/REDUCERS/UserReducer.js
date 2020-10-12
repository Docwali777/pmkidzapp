
const initialState = {
  user: null
}

export default function UserReducer(state=initialState, action){



    switch(action.type){
        case "setUser":
                return {...state, user: action.payload}
                break

    default: 
        return state
            
    }

}