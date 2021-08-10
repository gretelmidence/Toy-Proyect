import './style.css'
import { Grid, Button, Container, Typography } from '@material-ui/core';
import axios from "axios";
import { useState, useEffect } from 'react';
import firebase from '../../helpers/db';

const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = () => {
  const [product, setProduct] = useState({});
  const [stores, setStores] = useState([]);

  const fetchData = async (productId) => {
    const user = JSON.parse(localStorage.getItem('user'))
    var tutorialsRef = firebase.database().ref(`/todos/${user.userId}`);
    let x = await tutorialsRef.get('/games')
    x = x.toJSON()
      tutorialsRef.set({
        games: {
          ...x.games,
          devilMayCry: 1,
        }
      })
    
    console.log(user)
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

  // useEffect(() => {
  //   // mergeProductDetails();
  // }, [stores]);

  // const mergeProductDetails = () => {
  //   if (product && product.deals) {
  //     {
  //       product.deals.map((x) => {
  //         {
  //           Object.values(stores).map((y) => {
  //             if (x.storeID === y.storeID) {
  //               Object.assign(x, y)
  //             }
  //           }
  //           )
  //         };
  //       }
  //       )
  //     };
  //   }
  //   console.log("productproduct:", product)
  // }

  const storeDetailData = () => {
    const displayStores = product?.deals ? product.deals.map(store => {
      const currentStore = stores.find(element => element.storeID === store.storeID);
      console.log(currentStore);
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
            <Button size="large" className="custom-button">Add to Library</Button>
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
              variant="p"
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



// {products && products.length ? (
//   <Grid container spacing={2}>
//     {Object.keys(products).map(
//       (productId) => 
//         products[productId].name.includes(filter) &&
//         Products(productId)
//     )}
//   </Grid>
// ) : (
//   <Products/>
// )}

// import firebase from '../../helpers/db'

// var tutorialsRef = firebase.database().ref("/adsad");
// tutorialsRef.push({
//   test: 'gigugkugjhgkgjk'
// })