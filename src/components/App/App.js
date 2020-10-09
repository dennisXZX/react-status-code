import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';
import Jumbotron from "../Jumbotron/Jumbotron";
import {fetchUserData} from "../../utils";

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

    return (
        <div className={styles.app}>
            <Jumbotron
                company={advertisement?.company}
                url={advertisement?.url}
                text={advertisement?.text}
            />
        </div>
    );
};

export default App;
