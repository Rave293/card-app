import product from "./Product";

const Image = () => {
  return <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />;
};

export default Image;