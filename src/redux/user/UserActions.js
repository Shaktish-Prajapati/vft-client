import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from './UserTypes'
import { message } from 'antd'
import axios from 'axios'

require('dotenv').config();

export const Register = (user)=> async (dispatch)=>{
    try{
            dispatch({
            type: USER_REGISTER_REQUEST
        })

        // headers:{
        //     'Content-Type':'application/json',
        //                 'Acess-Control-Allow-Origin':'*',
        //                 'Authorization':`Bearer ${token}`,
        //                 'Accept': "application/json"
        //     }
        // })

        const config={
            header:{
                'Content-Type':'appliction/json',
            },
        }

        const {data} = await axios.post(`http://localhost:5000/api/user`,
        user,
        config
        )

        console.log(data)

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload: data
        })

        message.success('Registered successfully!')

        localStorage.setItem(
            `vftuserData`,
            JSON.stringify(data.savedUser),
        )
        // localStorage.setItem(
        //     'vft-token',
        //     cookies.get
        // )
        

    } catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data ? error.response.data : error.message
        });

        const errorMsg = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        
        message.error(errorMsg)
    }
}

export const login=(email,password)=> async(dispatch)=>{
    try{
            dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config={
            header:{
                'Content-Type':'appliction/json',
            },
        }
        console.log(process.env.REACT_APP_API_URI)
        const {data} = await axios.post(`http://localhost:5000/api/user/login`,
        {email,password},
        config
        )
        console.log(data)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem(
            `vftuserData`,
            JSON.stringify(data)
        )
    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data ? error.response.data : error.message
        });

        const errorMsg = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        
        message.error(errorMsg)
    }
}
export const Logout=()=>async (dispatch)=>{
    try {
        // const TOKEN = JSON.parse(localStorage.getItem(`vftuserData`));
        // const  config = {
        //     header:{
        //         'Content-Type':'application/json',
        //                         Authorization:`Bearer ${TOKEN.token}`
        //     }
        // }
        // console.log(config);
        // const {data} = await axios.get('http://localhost:5000/api/user/logout',null,config)
        // console.log(data);
        // if (!data.status) throw 'Already Logged out!!';
        localStorage.removeItem('vftuserData')
        dispatch({
            type:USER_LOGOUT
        })
        message.success('Logout successfull!!');

    } catch (error) {
        message.error(`${error}`);
    }
}