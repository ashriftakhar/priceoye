export  const initialState = {
    basket : [],
    
};

// export const getBasketTotal = (basket) =>
// basket?.reduce((amount, item) =>item.price + amount, 0)

const reducer = (state, action) => {
   console.log("hello",action)
    switch(action.type){

            
        case 'ADD_TO_BASKET':
            //logic of add ot basket;
            return{
                ...state,
                basket : [...state.basket,action.item]

            }
            
            
        case 'REMOVE_FROM_BASKET':

        let newBasket = [...state.basket];
         
        const index = state.basket.findIndex((basketItem) =>
        basketItem.id === action.id
        );

        if(index >= 1){
            newBasket.splice(index, 1)
        }else {
            console.warn(`Cant remove product id: ${action.id}`);
        }
                //removing
        return{
            ...state,
            basket :newBasket,
            
        };

        default:
         return state;
    }
}
export default reducer;  