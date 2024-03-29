import { useEffect, useState } from "react";
import Square from "../components/Square";
type Player = "X" | "O" | "BOTH" | null;

const calculateWinner = (squares: Player[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
      if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
      ) {
          return squares[a];
      }
  }
  return null;
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  const reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });

  return (
      <>
          {!winner ? (
              <p>Hey {currentPlayer}, it's your turn</p>
          ) : winner !== 'BOTH' ? (
              <p>Congratulations {winner}</p>
          ) : (
              <p>Congratulations you're both winners</p>
          )}

          <div className='grid'>
              {squares.map((value, i) => (
                  <Square
                      winner={winner}
                      key={i}
                      onClick={() => setSquareValue(i)}
                      value={value}
                  />
              ))}
          </div>
          <button className='reset' onClick={reset}>
              RESET
          </button>
      </>
  );
};

export default Board;
