import React from "react";

const DetailAlbum = ({ params: { id } }: { params: { id: string } }) => {
  return <div className="pt-20">detail album : {id} </div>;
};

export default DetailAlbum;
