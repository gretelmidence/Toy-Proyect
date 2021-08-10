import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./CustomCard/";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { gameID, external, thumb, cheapest } = product;
    return (
      <React.Fragment key={gameID}>
        <div key={gameID}>
          <Link to ={`/product/${gameID}`}>
            <div className="card">
              <div className="image">
                <Container maxWidth="xs" style={{backgroundColor:"skyblue"}}> 
                  <img src={thumb} alt={external}></img>
                </Container>
              </div>
              <div className="content">
                <div className="header">{external}</div>
                <div className="meta price">$ {cheapest}</div>
              </div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    )});
  return <>{renderList}</> 
};

export default ProductComponent;
