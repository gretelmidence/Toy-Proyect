import { useState, useEffect } from "react";
import { Grid, Container, Typography} from "@material-ui/core";
import firebase from '../../helpers/db';
import axios from "axios";
import "./style.css";

const Basket = () => {
  const [products, setProducts] = useState([]);
  const [gamesIds, setGameIds] = useState([]);
  const [totalCost, setTotalCost] = useState([]);
  
  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    var dbDataRef = firebase.database().ref(`/games/${user.userId}`);
    let dbData = await dbDataRef.get('/${user.userId}');
    dbData = dbData.toJSON();
    let games = [];
    Object.keys(dbData).forEach((store) => {
      const storeGames = Object.keys(dbData[store]);
      Object.values(storeGames).forEach((id) => {
        games.push(id);
      })
    })
    const gameSet = [...new Set(games)];
    let uniqueIds = gameSet.filter((c, index) => {
        return gameSet.indexOf(c) === index;
    });
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

  const monitorProducts = async (products) => {
    console.log(products)
  };

  const totalPrice = async () => {
    let gamesPrice = [] ;
    Object.keys(products).map((element) => {
      gamesPrice.push(products[element]?.deals?.[0].price);
    })
    const reducer = (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue); 
    const x = gamesPrice && gamesPrice.length ? gamesPrice.reduce(reducer): "0.00";
    setTotalCost((x ? x : "0.00"));
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [gamesIds]);

  useEffect(() => {
    monitorProducts(products);
    totalPrice();
  }, [products]);

  
  return (
    <Container id="basket">
      <Grid container spacing={4}>
        <Typography className="basket-title" variant="h3"><strong>Library</strong></Typography>
        <Container className="box">
          
          {Object.keys(products).map((element) => {
            return (
              <div className="basket-container">
                <Grid className="product-store-box" key={`storeid`}>
                  <div className="game-img">
                    <img className="img-basket" src={products[element]?.info?.thumb} alt="https://img.icons8.com/64/000000/controller.png"/>
                  </div>
                  <Typography variant="h5">{products[element]?.info?.title}</Typography>
                  <Typography variant="h5">$ {products[element]?.deals?.[0].price}</Typography>
                </Grid>
              </div>
            )
          })}

        </Container>
      </Grid>
      <Typography className="total-basket" variant="h6"><strong>Total Cost:</strong> $ {totalCost}</Typography>
    </Container>
  );
};

export default Basket;
