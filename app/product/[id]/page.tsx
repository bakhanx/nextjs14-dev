import { Metadata } from "next";
import Head from "next/head";

type Props = {
  params: {
    id: String;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Product",
};

const ProductDetail = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default ProductDetail;
