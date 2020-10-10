import React from 'react';
import styles from './ActionBar.module.scss';
import Button from '../Button/Button';

const ActionBar = props => {
    const { shuffleCard, resetCard } = props;

    return (
        <div className={styles.actionBar}>
            <Button onClick={shuffleCard}>SHUFFLE PAGE</Button>
            <Button btnType="danger" onClick={resetCard}>RESET</Button>
        </div>
    );
};

export default ActionBar;
