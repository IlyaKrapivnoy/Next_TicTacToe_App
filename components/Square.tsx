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
    const isWinner = Boolean(winner);

    return (
        <button
            className={
                value ? `square square_${value.toLocaleLowerCase()}` : 'square'
            }
            onClick={onClick}
            disabled={isWinner || !value}
        >
            {value ? value : null}
        </button>
    );
};  

export default Square;
