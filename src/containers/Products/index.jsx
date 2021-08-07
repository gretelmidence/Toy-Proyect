import { Grid, Container, TextField, makeStyles } from "@material-ui/core";
import Product from "../Product";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

const Products = ({ addProduct }) => {

  const [products, setProducts] = useState([]);
  const [filter,setFilter] = useState("batman");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filteredData, setFilteredData] = useState(products);
  const classes = useStyles();

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${filter}&limit=60&exact=0`)
      .catch(err => {
        console.log("Err", err);
      });
    setProducts((response && response.data) ? response.data : [] );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products])

  useEffect(() => {
    fetchProducts();
  }, [filter])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchChange = (event) => {
    let value = event.target.value?.toLowerCase();
    
    if(value ==="")
    {
      value="batman";
    }
    setFilter(value);
  };


  return (

    <div>
      <Container id="products">
        <div className="navbar-search">
          <SearchIcon className={classes.searchIcon} />
          <TextField onChange={handleSearchChange} className={classes.searchInput}
            label="Search Game" variant="standard" />
        </div>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
}));
export default Products;

