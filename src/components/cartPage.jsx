import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../reducers/cartReducer";
import {
  Button,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Paper,
  Box,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import NavBar from "./navBar";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCartQuantity({ productId, quantity }));
  };

  // Calculate total price and quantity
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <NavBar />
      <Typography variant="h4">Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Grid container key={item.id} alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6">{item.product_name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">${item.price}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Tooltip title="Decrease quantity">
                  <span>
                    <IconButton
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </span>
                </Tooltip>
                <Typography variant="body1">{item.quantity}</Typography>
                <Tooltip title="Increase quantity">
                  <span>
                    <IconButton
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
          <Paper style={{ marginTop: 20, padding: 20 }}>
            <Typography variant="h6">Summary</Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1">Total Quantity:</Typography>
              <Typography variant="body1">{totalQuantity}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1">Total Price:</Typography>
              <Typography variant="body1">${totalPrice.toFixed(2)}</Typography>
            </Box>
          </Paper>
        </>
      )}
    </div>
  );
};

export default CartPage;
