import {
    SET_COLLAPSED
} from '../action/Types'

const initialState={
    collapse:false,
}
export const collapseReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_COLLAPSED:
            return {
                ...state,
                collapse:!state.collapse
            }
        default:
            return state;
    }
}