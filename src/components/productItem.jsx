import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartReducer";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("product :", product);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="body2">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddToCart} color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
