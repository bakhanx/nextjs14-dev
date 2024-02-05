import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Not Found"
}

export default function NotFound() {
  return <div className="text-2xl">Not found!</div>;
}
