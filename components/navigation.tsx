import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed w-full">
      <ul className="flex gap-x-2 p-2 border-b-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
