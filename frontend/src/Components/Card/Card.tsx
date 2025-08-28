import React from "react";
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price })=> {
return (
    <div className="card">
        <h2>Stockify</h2>
        <div className="details">
            <h3>{companyName} ({ticker})</h3>
            <p>${price}</p>
        </div>
            <p className="info">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    </div>
)
};

export default Card;