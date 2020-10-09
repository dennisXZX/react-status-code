import axios from 'axios';
import {API_ENDPOINT} from "../constants";

export const fetchUserData = async (pageNumber) => {
    const apiResponse = await axios.get(`${API_ENDPOINT}?page=${pageNumber}`);

    return {
        userData: apiResponse.data.data,
        ad: apiResponse.data.ad
    };
};
