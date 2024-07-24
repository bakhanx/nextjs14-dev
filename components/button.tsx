import React from "react";

const Button = ({
  name,
  onClick,
}: {
  name: string;
  onClick? : React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <button onClick={onClick} className="p-2 text-white bg-gray-500">
        {name}
      </button>
    </div>
  );
};

export default Button;
