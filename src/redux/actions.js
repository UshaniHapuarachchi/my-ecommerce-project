export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const PLACE_ORDER = 'PLACE_ORDER';


export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    id: product.id,
    productName: product.name,
    price: product.price,
    quantity: 1,
    productImage: product.image || `${product.name.toLowerCase()}.png`, 
  },
});


export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});


export const updateCartItem = (productId, quantity) => ({
  type: UPDATE_CART,
  payload: { productId, quantity },
});


export const placeOrder = () => {
  return (dispatch, getState) => {
    const cart = getState().cart; 
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const order = {
      orderDate: new Date().toLocaleDateString(),
      totalPrice,
    };

    dispatch({
      type: PLACE_ORDER,
      payload: order,
    });

    
    dispatch({
      type: REMOVE_FROM_CART, 
      payload: cart.map(item => item.id) 
    });
  };
};
