import {TOGGLE_CART_WIDGET_VISIBLE, widgetReducerAction} from '../types/types'

interface widgetVisible {
    showCart: boolean
}

const INITIAL_STATE = {
    showCart: false
}

const cartWidgetReducer = (
    state : widgetVisible = INITIAL_STATE, 
    action : widgetReducerAction
) => {
    switch(action.type){
        case TOGGLE_CART_WIDGET_VISIBLE:
            return{
                ...state , showCart:!state.showCart
            }
        default:
        return state
    }
}

export default cartWidgetReducer