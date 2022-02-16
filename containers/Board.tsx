import React, { useState } from "react";
import Square from "../components/Square";

const Board = () => {
  const [squares, getSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);
  return (
    <>
      <div>Board is here</div>
      {currentPlayer}
      <div className={"row"}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={"row"}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={"row"}>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
