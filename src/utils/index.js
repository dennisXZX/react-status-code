import axios from 'axios';
import {API_ENDPOINT} from "../constants";

export const fetchDataFromBackend = async (pageNumber) => {
    const apiResponse = await axios.get(`${API_ENDPOINT}?page=${pageNumber}`);

    const advertisementData = apiResponse.data.ad;
    const rawUserData = apiResponse.data.data;
    const rawUserDataLength = rawUserData.length;
    const totalPage = apiResponse.data.total_pages;
    let processedUserData = rawUserData;

    const isRawUserDataEven = isEven(rawUserDataLength);

    if (isRawUserDataEven) {
        processedUserData = removeLastDataItem(rawUserData);
    }

    return {
        userData: processedUserData,
        ad: advertisementData,
        totalPage
    };
};

export const isEven = (number) => {
    return number % 2 === 0;
};

export const removeLastDataItem = (data) => {
    return data.slice(0, -1);
};
