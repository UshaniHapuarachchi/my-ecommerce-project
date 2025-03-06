import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5132/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));  
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list-section">
      <Typography variant="h2" align="center" sx={{ marginTop: '60px', fontWeight: 'bold' }}>
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '20px' }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ maxWidth: 280, margin: '0 auto' }}> 
              <img
                src={`/images/${product.name.toLowerCase()}.png`}
                alt={product.name}
                width="60%" 
                style={{ display: 'block', margin: '20px auto' }} 
              />
              <CardContent>
                <Typography variant="h6" align="center">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {product.description}
                </Typography>
                <Typography variant="h6" align="center">{`Price: $${product.price}`}</Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {`In Stock: ${product.quantityInStock}`}
                </Typography>
                <Button 
                  variant="contained" 
                  color="error" 
                  onClick={() => handleAddToCart(product)}
                  disabled={product.quantityInStock === 0}
                  sx={{ marginTop: '10px', display: 'block', margin: '10px auto' }}
                >
                  {product.quantityInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
