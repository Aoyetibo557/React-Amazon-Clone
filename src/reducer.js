export const initalState = {
    basket: [],
    user: null,
    tempBasket: [],
};

// this is called a selector
export const getBasketTotal = (basket) =>{
    return basket?.reduce((amount, item) => item.price +amount, 0);
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        case 'SEE_CURR_ITEM':
            return{
                ...state,
                ...state.tempBasket = [],
                tempBasket: [...state.tempBasket, action.item]    
            }

        case 'ADD_TO_BASKET':
            // lOGIC FOR ADDIG ITEM TO BASKET
            // This will return what the new datalayer will look like
            return { 
                ...state,
                basket: [...state.basket, action.item] //This is what we call a mutable update
            }

        case'REMOVE_FROM_BASKET':
            // Logic for removing items from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0){
                // item exist in baske, remove it
                newBasket.splice(index, 1);
                
            }
            else{
                console.warn(
                    `Cant remove product(id: ${action.i}) as it is not in basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;