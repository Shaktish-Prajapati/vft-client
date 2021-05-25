import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from './UserTypes'

export const userRegisterReducer = (state={},action)=>{
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            return {
                loading:false,
                userData:action.payload,
                status:true
            }
        case USER_REGISTER_FAIL:
            return {
                loading:false,
                error:action.payload,
                status:false
            }
        default:
            return state;
    }
}

export const userLoginReducer = (state={},action)=>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading:true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading:false,
                userData:action.payload,
                status:true
            }
        case USER_LOGIN_FAIL:
            return {
                loading:false,
                error:action.payload,
                status:false
            }
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}

export const userLogoutReducer = (state={},action)=>{
    switch (action.type) {
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}
