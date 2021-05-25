import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({component:Component, ...rest}) => {
    const userData = useSelector(state=>state.userLogin)
    return (
        <Route
        {...rest}
        render={(props)=> {
            if((userData.status === undefined) || (userData.status === false)){
                return <Redirect to='/' from={props.location}/>
            }else{
                return <Component {...props} ></Component>
            }
        }
        }
        >
            
        </Route>
    )
}

export default ProtectedRoute
