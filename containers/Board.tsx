import React, { useState } from "react";

const Board = () => {
  const [squares, getSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  return (
    <>
      <div>Board is here</div>
      {currentPlayer}
    </>
  );
};

export default Board;
