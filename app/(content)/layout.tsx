import Navigation from "@/components/navigation";
import React from "react";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default ContentLayout;
