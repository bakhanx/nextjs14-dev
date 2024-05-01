"use client"

import { Metadata } from "next";
import { usePathname } from "next/navigation";



const About = () => {
  const pathname = usePathname();
  <div>page name </div>;
  return <div>This page&apos;s router : ${pathname}</div>;
};

export default About;
