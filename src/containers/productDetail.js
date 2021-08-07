import React, {useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "./redux/actions/productActions";

const ProductDetail = () => {
  const product =useSelector((state) => state.product);
  const {productId} = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  const{gameID,external,info,cheapestPriceEver,deals,category}= product;

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://www.cheapshark.com/api/1.0/games?id=${productId}`)
      .catch(err => {
        console.log("Err",err);
      });
  
    const selectedGame = {
      img : response?.data?.info?.thumb || "https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg",
      title : response?.data?.info?.title || "New game",
      price : response?.data?.cheapestPriceEver?.price || "price",
      deals : response?.data?.deals?.deals || "deals",
      ...response?.data
    };
    dispatch(selectedProduct(selectedGame));
  };
  useEffect(() => {
    if(productId && productId !== "") fetchProductDetail();
  },[productId]);

  useEffect(() => {
    console.log(product);
  },[product]);
    return (
      <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={info?.thumb || "https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg"} />
              </div>
              <div className="column rp">
                <h1>{external}</h1>
                <h2>
                  <a className="ui teal tag label">$ {cheapestPriceEver?.price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{deals?.deals}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default ProductDetail;