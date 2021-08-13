import { useState, useEffect } from "react";
import { Grid, Container, Typography} from "@material-ui/core";
import firebase from '../../helpers/db';
import axios from "axios";
import "./style.css";

const Basket = () => {
  const [products, setProducts] = useState([]);
  const [gamesIds, setGameIds] = useState([]);
  const [totalCost, setTotalCost] = useState([]);
  const [storeQuantities, setStoreQuantities] = useState([]);
  const [dbDataInfo, setDbDataInfo] = useState({});
  
  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    var dbDataRef = firebase.database().ref(`/games/${user.userId}`);
    let dbData = await dbDataRef.get('/${user.userId}');
    dbData = dbData.toJSON();
    setDbDataInfo(dbData);

    let gameIds = [];
    let quantity = [];
    Object.keys(dbData).forEach((store) => {
      const storeGames = Object.keys(dbData[store]);
      Object.values(storeGames).forEach((value, key) => {
        gameIds.push(value);
        if(quantity[key]){
          if( quantity[key].productId === value){
            quantity[key] = {
              productId:value,
              quantity: quantity[key].quantity + dbData[store][value]
            }
          }
        } else {
          quantity.push({
            productId:value,
            quantity: dbData[store][value]
          });
        }
      })
    })

    const gameSet = [...new Set(gameIds)];
    let uniqueIds = gameSet.filter((c, index) => {
        return gameSet.indexOf(c) === index;
    });
    setStoreQuantities(quantity);
    setGameIds([uniqueIds]);
  }

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://www.cheapshark.com/api/1.0/games?ids=${gamesIds}`)
      .catch(err => {
        console.log("Err", err);
      });
    setProducts((response && response.data) ? response.data : [] );
  };

  const reducer = (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue);
  
  const totalPrice = async () => {
    let gamesPrice = [] ;

    Object.keys(products).map((element) => {
      if(dbDataInfo) {
        Object.keys(dbDataInfo).forEach((store) => {
          const storeItems = dbDataInfo[store];
          if(storeItems[element]){
            gamesPrice.push(products[element]?.deals?.[0].price*storeItems[element]);
          }
        })
      }
    });

    const price = gamesPrice && gamesPrice.length ? gamesPrice.reduce(reducer): "Loading...";
    setTotalCost((price ? price : "0.00"));
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamesIds]);

  useEffect(() => {
    totalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <Container className="basket">
      <Typography className="basket-title" variant="h3"><strong>Library</strong></Typography>
      <Typography className="total-basket" variant="h5"><strong>Total Cost:</strong> $ {totalCost}</Typography>
      <Grid container spacing={4}>
        <Container className="box">

          {Object.keys(products).map((element, key) => {
            return (
              <div className="basket-container" key={"product-"+key}>
                <Grid className="product-store-box">
                  <div className="game-img">
                    <img className="img-basket" src={products[element]?.info?.thumb} alt="https://img.icons8.com/64/000000/controller.png"/>
                  </div>
                  <Typography variant="h6">{products[element]?.info?.title}</Typography>
                  <Typography variant="h6">$ {products[element]?.deals?.[0].price}</Typography>
                  <div key={element+"-"+key} className="product-store-quantity">
                    Quantity in library: {storeQuantities[key].productId === element ? storeQuantities[key].quantity : 1}
                  </div>
                </Grid>
              </div>
            )
          })}

        </Container>
      </Grid>
    </Container>
  );
};

export default Basket;
