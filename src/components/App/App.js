import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';
import { uniqBy, shuffle } from 'lodash';
import Jumbotron from "../Jumbotron/Jumbotron";
import {fetchDataFromBackend} from "../../utils";
import ActionBar from '../ActionBar/ActionBar';
import CardList from '../CardList/CardList';
import Pagination from '../Pagination/Pagination';

const DEFAULT_PAGE_NUMBER = '1';

const App= () => {
    const [advertisement, setAdvertisement] = useState(null);
    const [userData, setUserData] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
    const [pageOrder, setPageOrder] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchPageData(DEFAULT_PAGE_NUMBER)
    }, []);

    const fetchPageData = async (pageNumber) => {
        const data = await fetchDataFromBackend(pageNumber);

        const userIds = data.userData.map(user => user.id);
        const pageOrder = {
            [pageNumber]: userIds
        };

        const hasUserAlreadyExisted = userData.find(currentUser => currentUser.id === userIds[0]);

        setAdvertisement(data.ad);
        setUserData(previousUserData => uniqBy([...previousUserData, ...data.userData], 'id'));
        setTotalPage(data.totalPage);

        if (!hasUserAlreadyExisted) {
            setPageOrder(previousPageOrder => ({ ...previousPageOrder,  ...pageOrder }));
        }
    };

    const shuffleCard = (pageNumber) => {
        const userIdsToBeShuffled = pageOrder[pageNumber];
        const shuffledUserIds = shuffle(userIdsToBeShuffled);

        const newPageOrder = {
            [pageNumber]: shuffledUserIds
        };

        setPageOrder(previousPageOrder => ({ ...previousPageOrder,  ...newPageOrder }));
    };

    const resetCard = (pageNumber) => {
        const userIdsToBeReset = pageOrder[pageNumber];

        const newPageOrder = {
            [pageNumber]: userIdsToBeReset.sort((a, b) => a - b)
        };

        setPageOrder(previousPageOrder => ({ ...previousPageOrder,  ...newPageOrder }));
    };

    return (
        <div className={styles.app}>
            <Jumbotron
                company={advertisement?.company}
                url={advertisement?.url}
                text={advertisement?.text}
            />

            <ActionBar
                currentPage={currentPage}
                shuffleCard={shuffleCard}
                resetCard={resetCard}
            />

            <CardList
                currentPage={currentPage}
                pageOrder={pageOrder}
                userData={userData}
            />

            <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                fetchData={fetchPageData}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default App;
