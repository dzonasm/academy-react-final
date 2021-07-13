import {SORT_BY_PRICE, sortingReducerAction, sortingReducerState} from '../types/types'

const INITIAL_STATE = {
 sort: ''
}

const sortingReducer = (state: sortingReducerState = INITIAL_STATE, action : sortingReducerAction) => {
    switch(action.type){
        case SORT_BY_PRICE:
            return{
                ...state , sort : action.payload
            }
        default:
        return state
    } 
}

export default sortingReducer