import { Metadata } from "next";
import MovieInfo from "./components/movie-info";


export const metadata: Metadata = {
  title: "Product",
};



const Product = async () => {
  return (
    <div>
      <h1>Detail</h1>
      <MovieInfo />
    </div>
  );
};

export default Product;
