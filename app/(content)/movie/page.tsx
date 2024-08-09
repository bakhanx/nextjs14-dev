import { Metadata } from "next";
import MovieInfo from "./components/movie-info";
import { useStore } from "../../(state)/product";
import CartInfo from "./components/cart-info";

export const metadata: Metadata = {
  title: "Product",
};

const Product = async () => {
  

  return (
    <div>
      <h1>Detail</h1>
      
      <CartInfo />
      <MovieInfo />
    </div>
  );
};

export default Product;
