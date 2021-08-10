import {Card,CardMedia,CardContent,CardActions,Typography,CardActionArea,Button,} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";

const CustomCard = ({basket,product,addProduct,}) => {
  return (
    <Card className="custom-card">
      <Link to={`product-view/${product.gameID}`}>
        <CardActionArea>
          <CardMedia component="img" alt="Contemplative Reptile" height="260" className="card-image"
            image={product?.thumb || "https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg"}
            title="Contemplative Reptile"
          />
          <CardContent className="content">
            <Typography className="title" gutterBottom variant="h5" component="h2">
              {product.external}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography variant="h3">View</Typography>
      </Link>
      {basket && (
        <CardActions>
          <Typography className="basket-item-price" gutterBottom variant="h5" component="h2">
            {product.cheapest}
          </Typography>
        </CardActions>
      )}
      <CardActions className="actions-content">
        {!basket && (
          <>
            <Typography className="price" gutterBottom variant="h5" component="h2">
              $ {product.cheapest}
            </Typography>
            <Button size="large" className="custom-button"
              onClick={() => {
                addProduct(product.gameID);
              }}>
              <ShoppingCart /> Add to Library
            </Button>
          </>
        )}
        {/* {basket && (
          <>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => {
                RemoveItemFromBasket(product.gameID);
              }}
            >
              Remove
            </Button>
            <>
              <Button
                size="small"
                variant="outlined"
                className="increase-product-quantity"
                onClick={() => {
                  updateProduct(product.gameID);
                }}
              >
                +
              </Button>
              <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  updateProduct(product.gameID);
                }}
              >
                -
              </Button>
            </>
          </>
        )} */}
      </CardActions>
    </Card>
  );
};

export default CustomCard;