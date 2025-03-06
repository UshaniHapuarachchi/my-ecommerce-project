import { ADD_TO_CART, PLACE_ORDER, REMOVE_FROM_CART, UPDATE_CART } from './actions';


const initialState = {
  cart: [],
  order: null, 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }], 
        };
      }

    case REMOVE_FROM_CART:
      
      const idsToRemove = Array.isArray(action.payload) ? action.payload : [action.payload];
      return {
        ...state,
        cart: state.cart.filter(item => !idsToRemove.includes(item.id)), 
      };

    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity } 
            : item
        ),
      };

    case PLACE_ORDER:
      return { 
        ...state, 
        order: action.payload, 
        cart: [], 
      };

    default:
      return state;
  }
};

export default rootReducer;
