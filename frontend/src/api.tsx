<<<<<<< HEAD
import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const response = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occurred.";
        }
=======
import axios from "axios"
export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<>
>>>>>>> parent of 5b4684d (save before --force)
    }
};
