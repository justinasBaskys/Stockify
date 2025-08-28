import React from "react";
import "./Card.css";
import {CompanySearch} from "../../company";

interface Props {
    id: string;
    searchResult: CompanySearch;

}

const Card: React.FC<Props> = ({ id, searchResult })=> {
return (
    <div className="card">
        <h2>Stockify</h2>
        <div className="details">
            <h3>{searchResult.name} ({searchResult.symbol})</h3>
            <p>{searchResult.currency}</p>
        </div>
            <p className="info">{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
    </div>
)
};

export default Card;