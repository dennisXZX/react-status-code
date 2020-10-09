import React from 'react';
import styles from './Jumbotron.module.scss';

const Jumbotron = props => {
    const { company, url, text } = props;

    return (
        <a href={url} target='_blank' rel="noopener noreferrer">
            <div className={styles.jumbotron}>
                <h1>{company}</h1>
                <p>{text}</p>
            </div>
        </a>
    );
};

export default Jumbotron;
