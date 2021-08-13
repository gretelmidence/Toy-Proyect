import CustomCard from "../CustomCard";

const Product = ({ basket, product, addProduct }) => (
  <CustomCard
    basket={basket}
    product={product}
    addProduct={addProduct}
  />
);

export default Product;