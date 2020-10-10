import React from 'react';
import styles from './ActionBar.module.scss';
import Button from '../Button/Button';

const ActionBar = props => {
    const { currentPage, shuffleCard, resetCard } = props;

    return (
        <div className={styles.actionBar}>
            <Button onClick={() => shuffleCard(currentPage)}>SHUFFLE PAGE</Button>
            <Button btnType="danger" onClick={() => resetCard(currentPage)}>RESET</Button>
        </div>
    );
};

export default ActionBar;
