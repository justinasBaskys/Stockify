import axios from "axios";
import {
    CompanyBalanceSheet, CompanyCashFlow,
    CompanyIncomeStatement,
    CompanyKeyMetrics,
    CompanyKeyRatios,
    CompanyProfile,
    CompanySearch
} from "./company";

export interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occured.";
        }
    }
};

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`

        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};
export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&limit=5&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};
export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&limit=5&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};
export const getCashFlowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&limit=5&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};