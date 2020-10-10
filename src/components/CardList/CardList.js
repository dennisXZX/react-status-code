import React from 'react';
import styles from './CardList.module.scss';
import Card from '../Card/Card';

const CardList = props => {
    const { currentPage, pageOrder, userData } = props;

    const currentPageIds = pageOrder[currentPage];

    return (
        <div className={styles.cardList}>
            {currentPageIds && currentPageIds.map(id => {
                const user = userData.find(userData => userData.id === id);

                return (
                    <Card key={user.id} user={user} className={`${styles.customCard}`} />
                )
            })}
        </div>
    );
};

export default CardList;
