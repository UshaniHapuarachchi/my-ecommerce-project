import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const OrderConfirmation = () => {
  const order = useSelector(state => state.order);

  if (!order) return null;

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6">Order Confirmation</Typography>
      <Typography>Date: {order.orderDate}</Typography>
      <Typography>Total Price: {order.totalPrice}</Typography>
      <Typography>Your order has been successfully placed!</Typography>
    </Paper>
  );
};

export default OrderConfirmation;
