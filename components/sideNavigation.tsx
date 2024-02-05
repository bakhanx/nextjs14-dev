import Link from "next/link";

const SideNavigation = () => {
  return (
    <nav>
      <ul className="fixed flex flex-col w-24 h-full gap-y-2 pl-2 border-r-2">
        <li>
          <Link href="/about/introduce">Introduce</Link>
        </li>
        <li>
          <Link href="/about/partners">Partners</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
