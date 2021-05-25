import {combineReducers} from 'redux'
import { userLoginReducer, userLogoutReducer, userRegisterReducer } from './user/UserReducer'

export const rootReducer = combineReducers({
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer,
    userLogout:userLogoutReducer
})