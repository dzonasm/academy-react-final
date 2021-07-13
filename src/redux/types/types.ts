//menu item props for components, that dont require the id to be passed
export interface shopItem{
    id:string,
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string,
    quantity: number
    } 

export interface menuItem{
    item: shopItem,
    id:string,
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string,
    quantity: number
}

//sorting reducer state type
export interface sortingReducerState {
    sort: string
}


//add to cart button props
export interface addToCartButtonProps {
    item : shopItem
    buttonText: string
}

//remove from cart button props

export interface removeFromCartButttonProps {
    item : shopItem
    buttonText: string
}

export interface addRemoveComponentProps{
    item: shopItem
}

//search bar props

export interface searchBarProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

//custom button props

export interface customButtonProps {
    buttonText : string,
    wide?: true | undefined,
    remove?: true | undefined,
    handleClick?: () => void,
    type? : "button" | "submit" | "reset" | undefined
}


//newItemType
export interface shopItemArray{
    items: shopItem[]
}

//types of
export const NEW_ITEM_ADDED = 'NEW_ITEM_ADDED'
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
export const ITEM_REMOVED = 'ITEM_REMOVED'
export const TOGGLE_CART_WIDGET_VISIBLE = 'TOGGLE_CART_WIDGET_VISIBLE'
export const SORT_BY_PRICE = 'SORT_BY_PRICE'
export const SINGLE_ITEM_REMOVED = 'SINGLE_ITEM_REMOVED'

//action type for sorting reducer

export type sortingReducerAction = {type : typeof SORT_BY_PRICE, payload: string}

// action type in shopping cart
export type shoppingCartAction = {type : typeof NEW_ITEM_ADDED | typeof ITEM_REMOVED | typeof SINGLE_ITEM_REMOVED, payload: shopItem}

//action type for the adds reducer
export type addsReducerAction = {type : typeof ADD_NEW_ITEM , payload: shopItem}


//action type for widget reducer
export type widgetReducerAction = { type: typeof TOGGLE_CART_WIDGET_VISIBLE, payload: boolean}




