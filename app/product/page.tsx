import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
};

const Product = () => {
  return (
    <div>
      <span>Detail</span>
      <ul>
        {Array(5)
          .fill(0)
          .map((e, i) => (
            <li key={i} className="py-2 hover:text-blue-500">
              <Link href={`/product/${i}`}>Product{i}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Product;
