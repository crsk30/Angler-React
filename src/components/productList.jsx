import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductItem from "./productItem";
import axios from "axios";
import NavBar from "./navBar";
import { TablePagination } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, settotalCount] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    axios
      .get(`http://192.168.112.22:3001/getProducts?page=${page}`)
      .then((response) => {
        setProducts(response.data.products);
        settotalCount(response.data.totalProducts);
      })
      .catch((error) => console.error("Error", error));
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <NavBar />
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
      <TablePagination
        component="div"
        count={totalCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </div>
  );
};

export default ProductList;
