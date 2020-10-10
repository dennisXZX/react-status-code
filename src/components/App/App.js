import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';
import Jumbotron from "../Jumbotron/Jumbotron";
import {fetchUserData} from "../../utils";
import ActionBar from '../ActionBar/ActionBar';

const App= () => {
    const [advertisement, setAdvertisement] = useState(null);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData('1');

            setAdvertisement(data.ad);
            setUserData(data.userData);
        }

        fetchData()
    }, []);

    const shuffleCard = () => {
        console.log('shuffle');
    };

    const resetCard = () => {
        console.log('reset');
    };

    return (
        <div className={styles.app}>
            <Jumbotron
                company={advertisement?.company}
                url={advertisement?.url}
                text={advertisement?.text}
            />

            <ActionBar
                shuffleCard={shuffleCard}
                resetCard={resetCard}
            />
        </div>
    );
};

export default App;
