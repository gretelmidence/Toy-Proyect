import { useState, useEffect } from 'react';
import axios from "axios";
import firebase from '../../helpers/db';
import { Grid, Button, Container, Typography } from '@material-ui/core';
import './style.css'

const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = () => {
  const [product, setProduct] = useState({});
  const [stores, setStores] = useState([]);

  const addGameToLibrary = async (productId, storeId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    var dbDataRef = firebase.database().ref(`/games/${user.userId}/${storeId}`);
    let dbData = await dbDataRef.get('/${user.userId}');
    dbData = dbData.toJSON();
    let game = [];
    if (dbData && dbData[productId]) {
      game[productId] = dbData[productId] += 1;
      dbDataRef.set({
        ...game,
        ...dbData
      });
    } else if(dbData) {
      game[productId] = 1;
      dbDataRef.set({
        ...game,
        ...dbData
      });
    } else {
      game[productId] = 1;
      dbDataRef.set(game);
    }
  }

  const fetchData = async (productId) => {
    const response = await axios
      .get(`https://www.cheapshark.com/api/1.0/games?id=${productId}`)
      .catch(err => {
        console.log("Err", err);
      });

    setProduct({
      gameID: productId,
      thumb: response?.data?.info?.thumb || "https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg",
      title: response?.data?.info?.title || "New game",
      cheapPrice: response?.data?.cheapestPriceEver?.price || "price",
      deals: response?.data?.deals || []
    });

    const response2 = await axios
      .get('https://www.cheapshark.com/api/1.0/stores')
      .catch(err => {
        console.log("Err", err);
      });

    const res = response2?.data || [];
    setStores(res);
  }

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchData(id[2]);
  }, []);

  useEffect(() => {
  }, [product]);

  const storeDetailData = () => {
    const displayStores = product?.deals ? product.deals.map(store => {
      const currentStore = stores.find(element => element.storeID === store.storeID);
      const currentStoreImg = currentStore?.images ? "https://img.icons8.com/dusk/64/000000/online-store.png" : "https://img.icons8.com/64/000000/controller.png";
      return {
        ...store,
        storeName: currentStore ? currentStore.storeName : "Store Name",
        storeImg: currentStore ? currentStoreImg : ""
      }
    })
      : [];

    return (
      displayStores.map(store => {
        return (
          <Grid className="product-store-box" key={`storeid-${store.storeID}`}>
            <Typography variant="h3">{store.storeName}</Typography>
            <img className="img" src={store.storeImg} alt="https://img.icons8.com/64/000000/controller.png"/>
            <Typography>Price: $ {store.price}</Typography>
            <Typography>Retail Price: $ {store.retailPrice}</Typography>
            <Typography>Savings: $ {parseFloat(store.savings).toFixed(2)}</Typography>
            <Button size="large" className="custom-button"
              onClick={() => {
                addGameToLibrary(product.gameID, store.storeID);
              }}
            >Add to Library</Button>
          </Grid>
        )
      })
    )

  }

  return (
    <Container className="product-view">
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} className="image-wrapper">
          <img src={product.thumb} alt={product.title} />
        </Grid>
        <Grid item xs={12} md={7} className="product-data">
          <div className="product-title">
            <Typography variant="h2">{product.external}
            </Typography>
            <Typography
              variant="subtitle1"
              dangerouslySetInnerHTML={createMarkup(product.info)}
            />
            <Typography variant="h2"><strong>{product.title}</strong></Typography>
            <Typography variant="h3">Price:$ {product.cheapPrice}</Typography>
          </div>
          <Container className="box">
            {storeDetailData()}
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductView;
