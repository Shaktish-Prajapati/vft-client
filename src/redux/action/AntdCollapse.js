import {
    SET_COLLAPSED
}  from './Types'

// direct dispatch
export const setCollapsed = ()=>(dispatch)=>{
    // action type dispatch
    dispatch({
        type:SET_COLLAPSED,
    })
}

// thunk use for action creator