import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder, removeFromCart, updateCartItem } from '../redux/actions';
import OrderConfirmation from './OrderConfirmation';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartItem(id, quantity));
    }
  };

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-table">
      {order ? (
        <OrderConfirmation />
      ) : (
        <div>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Cart Details
          </Typography>
          <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="center">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={`/images/${item.productImage}`}
                        alt={item.productName}
                        width="60"
                        height="60"
                        style={{ display: 'block', margin: '0 auto', borderRadius: '8px' }}
                      />
                      <Typography align="center">{item.productName}</Typography>
                    </TableCell>
                    <TableCell align="center">{item.price}</TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        size="small"
                        inputProps={{ min: 1 }}
                        sx={{ width: '80px' }}
                      />
                    </TableCell>
                    <TableCell align="center">{item.price * item.quantity}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleRemove(item.id)}
                        sx={{ fontWeight: 'bold' }}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
              Total Price: <b>{totalPrice}</b>
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handlePlaceOrder}
              sx={{ padding: '10px 40px', fontWeight: 'bold' }}
            >
              Place Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
