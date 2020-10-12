import { combineReducers } from "redux"


import UserReducer from "./UserReducer"
import HeadacheReducer from './HeadacheReducer'

export default combineReducers({
     UserReducer, 
     HeadacheReducer
})