import React, {SyntheticEvent} from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import {PortfolioGet} from "../../../Models/Portfolio";

interface Props {
    portfolioValues: PortfolioGet[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
    return (
        <section id="portfolio">
            <h3 className="mt-3 mr-20 ml-20 text-xl font-bold text-center text-blue-900">Company profile metrics are limited to the following symbols:</h3>
            <p className="mb-6 mr-60 ml-60 text-xl font-semibold text-center text-blue-900"><br/>AAPL, TSLA, AMZN, MSFT, NVDA, GOOGL, META, NFLX, JPM, V, BAC, AMD, PYPL, DIS, T, PFE, COST, INTC, KO, TGT, NKE, SPY, BA, BABA, XOM, WMT, GE, CSCO, VZ, JNJ, CVX, PLTR, SQ, SHOP, SBUX, SOFI, HOOD, RBLX, SNAP, AMD, UBER, FDX, ABBV, ETSY, MRNA, LMT, GM, F, RIVN, LCID, CCL, DAL, UAL, AAL, TSM, SONY, ET, NOK, MRO, COIN, RIVN, SIRI, SOFI, RIOT, CPRX, PYPL, TGT, VWO, SPYG, NOK, ROKU, HOOD, VIAC, ATVI, BIDU, DOCU, ZM, PINS, TLRY, WBA, VIAC, MGM, NFLX, NIO, C, GS, WFC, ADBE, PEP, UNH, CARR, FUBO, HCA, TWTR, BILI, SIRI, VIAC, FUBO, RKT</p>
            <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
                My Portfolio
            </h2>
            <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
                <>
                    {portfolioValues.length > 0 ? (
                        portfolioValues.map((portfolioValue) => {
                            return (
                                <CardPortfolio
                                    portfolioValue={portfolioValue}
                                    onPortfolioDelete={onPortfolioDelete}
                                />
                            );
                        })
                    ) : (
                        <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                            Your portfolio is empty.
                        </h3>
                    )}
                </>
            </div>
        </section>
    );
};

export default ListPortfolio;