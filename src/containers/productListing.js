import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from './redux/actions/productActions';


const ProductListing = () => {
  const products= useSelector((state)=> state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://cheapshark-game-deals.p.rapidapi.com/games',
      params: {title: ' ', exact: '0', limit: '60'},
      headers: {
        'x-rapidapi-key': 'd7cea1b8bcmsh843c35739671ccep17f314jsncdae85be7bef',
        'x-rapidapi-host': 'cheapshark-game-deals.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      dispatch(setProducts(response.data));
    }).catch(function (error) {
      console.error(error);
    });
    
  };

  useEffect(() => {
      fetchProducts();
  },[]);
  console.log("Products:" ,products);
    return (
        <div className="ui grid container">
          <ProductComponent />
        </div>
    );
};

export default ProductListing;