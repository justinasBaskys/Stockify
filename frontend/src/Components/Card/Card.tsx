import React, {SyntheticEvent} from "react";
import "./Card.css";
import {CompanySearch} from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio";

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate})=> {
return (
    <div key={id} id={id} className="card">
        <h2>Stockify</h2>
        <div className="details">
            <h3>{searchResult.name} ({searchResult.symbol})</h3>
            <p>{searchResult.currency}</p>
        </div>
            <p className="info">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
)
};

export default Card;