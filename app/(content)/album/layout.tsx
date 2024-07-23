import React, { ReactNode } from "react";

const AlbumLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return <div>{children} {modal}</div>;
};

export default AlbumLayout;
