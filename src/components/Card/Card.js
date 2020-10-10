import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';

const Card = props => {
    const {
        user,
        className,
        ...restProps
    } = props;

    const classes = classNames(styles.card, className);

    return (
        <div className={classes} {...restProps}>
            <div
                className={`${styles.image}`}
                style={{ backgroundImage: `url(${user?.avatar})` }}
            />
            <div className={`${styles.name}`}>
                {user?.first_name} {user?.last_name}
            </div>
            <div className={`${styles.email}`}>
                {user?.email}
            </div>
        </div>
    );
};

export default Card;
