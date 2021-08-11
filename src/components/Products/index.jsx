import { useState, useEffect } from "react";
import { Grid, Container, TextField } from "@material-ui/core";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import Product from "../Product";
import "./style.css";

const Products = ({ addProduct, inheritProducts }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("batman");

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${filter}&limit=60&exact=0`)
      .catch(err => {
        console.log("Err", err);
      });
    setProducts((response && response.data) ? response.data : [] );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    const cleanTimeout = setTimeout(() => {
      fetchProducts();
    }, 1000);

    return () => {
      clearTimeout(cleanTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleSearchChange = (event) => {
    let value = event.target.value?.toLowerCase();
    if (value === "") {
      value="/";
    }
    setFilter(value);
  };

  //Get current Page 
  return (
    <div>
      <Container id="products">
        <div className="navbar-search">
          <SearchIcon />
          <TextField onChange={handleSearchChange}
            label="Search Game" variant="standard" />
        </div>
        <Grid container spacing={4}>
          {products.length ? products.map((product, index) => (
            <Grid key={product.id+"-"+index} item xs={12} sm={6} md={4}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          )) : <div>No games found</div> }
        </Grid>
      </Container>
    </div>
  );
};

export default Products;

