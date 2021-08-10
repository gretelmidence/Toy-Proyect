import { Grid, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomCard from "../CustomCard";

import "./style.css";

const Basket = () => {
  
  return (
    <Container id="basket">
      <Grid container justify="center" spacing={4}>
        Library
      </Grid>
      <div className="actions">
        <Button
          size="small"
          color="secondary"
          variant="contained"
        >
          Empty Basket
        </Button>

        <Button
          size="small"
          variant="contained"
          component={Link}
          to="/checkout"
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Basket;
