import { Card, CardMedia, CardContent, CardActions, Typography, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

const CustomCard = ({ basket,product }) => {
  return (
    <Card className="custom-card">
      <Link to={`product-view/${product.gameID}`}>
        <CardActionArea>
          <CardMedia component="img" alt="Contemplative Reptile" height="260" className="card-image"
            image={product?.thumb || "https://unsplash.com/photos/YDZPdqv3FcA"}
            title="Contemplative Reptile"/>
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