import React from "react";

type Player = "X" | "O" | null;

const Square = ({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) => {
  if (!value) {
    return <button disabled={Boolean(winner)} />;
  }
  return <button>Square is here</button>;
};

export default Square;
