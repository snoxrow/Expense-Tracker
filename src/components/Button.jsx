import { useState } from "react";

const Button = () => {
  const [hovered, setHovered] = useState(false);

  const handleHoverOver = () => {
    setHovered(true);
  };

  const handleHoverLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <button
        type="button"
        className="w-12 h-12 rounded-full bg-red-400 p-2"
        style={{ width: hovered && "auto" }}
        onMouseOver={() => handleHoverOver()}
        onMouseLeave={() => handleHoverLeave()}
      >
        {!hovered ? "+" : "+ Add Expense"}
      </button>
    </>
  );
};

export default Button;
